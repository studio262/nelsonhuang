import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Container = styled.div`

`

const GalleryItem = (props) => (
  <Container className={props.className + " col-lg-offset-5 col-lg-4"}>
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
