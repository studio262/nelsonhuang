import React from "react"
import styled, { keyframes } from "styled-components"
import Link from "gatsby-link"

import GalleryItem from '../components/GalleryItem'

const Container = styled.div`
  display: flex;
  height: 90vh;
  justify-content: center;
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
//animation: ${props => props.animateNum ? "0.5s ease-in-out 1" : "none"};
const ProjectInfo = (props) => {
  return (
    <div className="row proj-title col-lg-offset-8">
        <h4 className="proj-name col-lg-1 col-md-2 animated fadeInUp">{props.title}</h4>
        <div className="extend proj-line"></div>
        <div className="clip">
            <ProjectNum className={"proj-num col-lg-1 col-md-2"} animateNum={props.animateNum}>{props.activeImage}</ProjectNum>
        </div>
    </div>
  )
}

class GalleryPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeImage: 0,
      direction: 1,
      animateNum: false
    }

    this.animating = false;
    this.animateNum = false;

    this.handleScroll = this.handleScroll.bind(this);
    this.animate = this.animate.bind(this);
    this.calcOffset = this.calcOffset.bind(this);
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
    let offsetBase = 100;

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

          <div className="fadeIn">
            {this.props.data.contentfulGallery.galleryImages.map((image, i) =>
              <GalleryItem
                key={image.id}
                active={i === this.state.activeImage}
                sizes={image.sizes}
                offset={this.calcOffset(i)}/>
            )}
          </div>

          <ProjectInfo
            activeImage={this.state.activeImage+1}
            animateNum={this.state.animateNum}
            title={this.props.data.contentfulGallery.title.toUpperCase()}/>

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
