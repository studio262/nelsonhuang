import React from "react"
import styled, { keyframes, injectGlobal } from "styled-components"
import Link from "gatsby-link"

import GalleryItem from '../components/GalleryItem'

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 800px) {
    overflow: visible;
    display: flex;
    height: auto;
    flex-direction: column;
    margin-top: 64px;

    .proj-title {
      display: none;
    }
	}


`

const numberAnimation = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0px);
  }

  20% {
    opacity: 0;
  }

  50% {
    transform: translateY(50px);
  }

  51% {
    opacity: 0.1;
    transform: translateY(-50px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`

const ProjectNum = styled.h4`
  animation: ${props => props.animateNum ? numberAnimation + " 700ms ease-in-out 1" : "none"};
  animation-fill-mode: forwards;
`

const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 800px) {
    overflow: visible;
    flex-wrap: nowrap;
    flex-direction: column;
    height: auto;
    width: 100%;
	}
`

const ProjectInfo = (props) => {
  return (
    <div className="row proj-title col-lg-offset-8 col-md-offset-8">
        <h4 className="proj-name col-lg-1 col-md-1 animated fadeInUp">{props.title}</h4>
        <div className="extend proj-line"></div>
        <div className="clip">
            <ProjectNum className={"proj-num col-lg-1 col-md-2"} animateNum={props.animateNum}>{props.activeImage}</ProjectNum>
        </div>
    </div>
  )
}

const GalleryNavContainer = styled.div`
  position: fixed;
  z-index: 100;
  margin-top: -32px;
  bottom: 40px;
  opacity: 1;
  -webkit-transform: translate3d(0,0,0);
  left: 40px;

  ul {
    margin: 0;
    padding: 0;
  }

  @media (max-width: 800px) {
    display: none;
	}
`

const GalleryNavLink = styled.li`
  display: block;
  position: relative;
  z-index: 1;

  cursor: pointer;
  text-decoration: none;

  height: 13px;
  width: 15px;

  &:hover div {
    height: 2px;
  }

  div {
    width: 15px;
    transition: background-color 300ms ease-in-out;
    background-color: ${props => props.active ? "#4F4F4F" : "#bababa"};
    height: ${props => props.active ? "2px" : "1px"};
  }
`

const GalleryNav = (props) => {
  return (
    <GalleryNavContainer>
     <ul>
       {props.galleryImages.map((image, i) =>
         <GalleryNavLink
           key={image.id}
           active={props.activeImage == i}
           onClick={(idea) => props.handleNavClick(i)}>
           <div></div>
         </GalleryNavLink>
       )}
     </ul>
  </GalleryNavContainer>
  )
}

class GalleryPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeImage: 0,
      direction: 1,
      animateNum: false,
      windowWidth: 0
    }

    this.animating = false;
    this.animateNum = false;

    this.handleScroll = this.handleScroll.bind(this);
    this.handleNavClick = this.handleNavClick.bind(this);
    this.animate = this.animate.bind(this);
    this.calcOffset = this.calcOffset.bind(this);
  }

  componentDidMount() {
    this.setState({
      windowWidth: window.innerWidth
    })
  }

  animate(delta) {
    this.animating = true;
    this.setState({
      animateNum: true
    });

    setTimeout(function(){
      this.animating = false;
    }.bind(this), (200+(delta+20)*2));

    setTimeout(function(){
      this.setState({
        animateNum: false
      });
    }.bind(this), 700);
  }

  handleNavClick(i) {
    this.setState({
      activeImage: i
    })
  }

  handleScroll(event) {
    let delta = event.deltaY;
    console.log(delta)

    if (!this.animating) {
      let length = this.props.data.contentfulGallery.galleryImages.length;
      let newActive = -1;

      if (delta < -12 && this.state.activeImage >= 0) {
        newActive = this.state.activeImage - 1;
      }
      if (delta > 12) {
        newActive = this.state.activeImage + 1;
      }


      if (newActive >= 0) {
        if (newActive > length-1) {
          newActive = 0;
        }

        this.animate(delta);

        setTimeout(function(){
          this.setState({
            activeImage: newActive
          });
        }.bind(this), 100);


      }
      // else {
      //   this.setState({
      //     activeImage: this.props.data.contentfulGallery.galleryImages.length-1
      //   });
      // }
    }

  }

  calcOffset(imageNum) {
    let offsetBase = 1000;

    if (imageNum == 0 && this.state.activeImage == this.props.data.contentfulGallery.galleryImages.length-1) {
      return offsetBase;
    }

    if (imageNum == this.props.data.contentfulGallery.galleryImages.length-1 && this.state.activeImage == 0) {
      return -1*offsetBase;
    }

    if (imageNum == this.state.activeImage) {
      return 0;
    } else if (imageNum > this.state.activeImage) {
      return offsetBase;
    } else {
      return -1*offsetBase;
    }
  }

  render() {

    return (
      <Container onWheel={this.handleScroll}>

          <ImageContainer className="fadeIn">
            {this.props.data.contentfulGallery.galleryImages.map((image, i) =>
              <GalleryItem
                key={image.id}
                active={i === this.state.activeImage}
                sizes={image.sizes}
                offset={(this.state.windowWidth > 800) ? this.calcOffset(i) : 0}/>
            )}
          </ImageContainer>


          <ProjectInfo
            activeImage={this.state.activeImage+1}
            animateNum={this.state.animateNum}
            title={this.props.data.contentfulGallery.title.toUpperCase()}/>

          <GalleryNav
            handleNavClick={this.handleNavClick}
            activeImage={this.state.activeImage}
            galleryImages={this.props.data.contentfulGallery.galleryImages}/>

      </Container>
    )
  }
}

export const query = graphql`
  query GalleryQuery($slug: String!) {
    contentfulGallery(fields: { slug: { eq: $slug } }) {
      title
      galleryImages {
        id
        sizes(maxWidth: 620) {
          ...GatsbyContentfulSizes_noBase64
        }
      }

      fields {
        slug
      }
    }
  }
`

export default GalleryPage;
