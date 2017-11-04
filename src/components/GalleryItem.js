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
  opacity 200ms cubic-bezier(.3,.3,.3,1);

  .gallery-image {
    max-width: 620px;
  }
`

const GalleryItem = (props) => (
  <Container
    active={props.active}
    offset={props.offset}
    className={" animated col-lg-offset-5 col-lg-4 col-md-offset-5 col-md-6" }>

    <Img sizes={props.sizes}
      className="gallery-image"
      fadeIn={true}
      backgroundColor={"#fafafa"}/>

  </Container>
)

export default GalleryItem;

/*
<GalleryItem className="section animated fadeInSlow">
    <GalleryItem className="proj-gallery col-lg-offset-5">
        <img className="proj" src="img/beauty/beauty-1.jpg"/>
    </GalleryItem>
</GalleryItem>,
*/
