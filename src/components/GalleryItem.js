import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Container = styled.div`
  position: absolute;
  left: 0;
  width: 100%;

  opacity: ${props => props.active ? 1 : 0};
  transform: ${props => props.offset};
  transition: transform 200ms ease-out;
`

const GalleryItem = (props) => (
  <Container
    active={props.active}
    direction={props.offset}
    className={" animated col-lg-offset-5 col-lg-4 " }>

    <Img sizes={props.sizes}/>
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
