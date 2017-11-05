import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Container = styled.div`
  position: absolute;
  left: 0;
  width: 100%;

  opacity: ${props => props.active ? 1 : 0};
  transform: translateY(${props => props.offset}px);
  transition: transform 1000ms cubic-bezier(.3,.3,.3,1),
  opacity 400ms cubic-bezier(.3,.3,.3,1);

  .gallery-image {
    max-width: 620px;
  }

  @media (max-width: 800px) {
    display: inline-block;
    position: relative;
    opacity: 1 !important;
    flex-shrink: 0;
    flex-grow: 0;

    .gallery-image {
      width: calc(100% - 40px);
      margin: 20px;
      max-height: 100vh;
      margin: 20px auto;
      object-fit: contain !important;
    }

	}
`

class GalleryItem extends React.Component {
  constructor(props) {
    super(props);

    this.class = "";
  }

  componentDidMount() {
    this.class = (window.innerHeight > 800) ? " animate col-lg-offset-5 col-lg-4 col-md-offset-5 col-md-8" : "";
  }

  render() {
    return(
      <Container
        active={this.props.active}
        offset={this.props.offset}
        className={this.class}>

        <Img sizes={this.props.sizes}
          outerWrapperClassName="gallery-image-wrapper"
          className="gallery-image"
          fadeIn={true}
          backgroundColor={"#f3f3f3"}/>

      </Container>
    )
  }
}

export default GalleryItem;

/*
<GalleryItem className="section animated fadeInSlow">
    <GalleryItem className="proj-gallery col-lg-offset-5">
        <img className="proj" src="img/beauty/beauty-1.jpg"/>
    </GalleryItem>
</GalleryItem>,
*/
