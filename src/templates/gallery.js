import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"

import GalleryItem from '../components/GalleryItem'

const Container = styled.div`
  display: flex;
  height: 90vh;
  justify-content: center;
`

const ProjectInfo = (props) => {
  return (
    <div className="row proj-title col-lg-offset-8">
        <h4 className="proj-name col-lg-1 col-md-2 animated fadeInUp">{props.title}</h4>
        <div className="extend proj-line"></div>
        <div className="clip">
            <h4 className={"proj-num col-lg-1 col-md-2" + props.numberClass}>{props.activeImage}</h4>
        </div>
    </div>
  )
}

class GalleryPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeImage: 0,
      direction: 1
    }

    this.animating = false;
    this.numberClass = "";

    this.handleScroll = this.handleScroll.bind(this);
    this.animate = this.animate.bind(this);
    this.calcOffset = this.calcOffset.bind(this);
  }

  animate(delta) {
    this.animating = true;

    setTimeout(function(){
      this.animating = false;
      this.numberClass = " numberShow";
    }.bind(this), (200+(delta+20)*2));
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

        this.numberClass = " numberHide";


        this.setState({
          activeImage: newActive
        });
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
            title={this.props.data.contentfulGallery.title.toUpperCase()}
            numberClass={this.numberClass}/>

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
        sizes(maxWidth: 600) {
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
