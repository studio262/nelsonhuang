import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"

import GalleryItem from '../components/GalleryItem'
import { Fullpage, Slide } from 'fullpage-react';

const Container = styled.div`

`

const fullPageOptions = {
  // for mouse/wheel events
  // represents the level of force required to generate a slide change on non-mobile, 10 is default
  scrollSensitivity: 1,

  // for touchStart/touchEnd/mobile scrolling
  // represents the level of force required to generate a slide change on mobile, 10 is default
  touchSensitivity: 7,
  scrollSpeed: 400,
  hideScrollBars: true,
  enableArrowKeys: true,
};



const slides = [
  <Slide className="section animated fadeInSlow">
      <GalleryItem className="proj-gallery col-lg-offset-5">
          <img className="proj" src="img/beauty/beauty-1.jpg"/>
      </GalleryItem>
  </Slide>,

  <Slide className="section">
      <GalleryItem className="proj-gallery col-lg-offset-5 col-lg-4">
          <img className="proj" src="img/beauty/beauty-2.jpg"/>
      </GalleryItem>
  </Slide>,

  <Slide className="section">
      <GalleryItem className="proj-gallery col-lg-offset-5 col-lg-4">
          <img className="proj" src="img/beauty/beauty-3.jpg"/>
      </GalleryItem>
  </Slide>,

  <Slide className="section">
      <GalleryItem className="proj-gallery col-lg-offset-5 col-md-offset-4">
          <img className="proj" src="img/beauty/beauty-4.jpg"/>
      </GalleryItem>
  </Slide>,

  <Slide className="section">
      <GalleryItem className="proj-gallery col-lg-offset-5">
          <img className="proj" src="img/beauty/beauty-5.jpg"/>
      </GalleryItem>
  </Slide>,

  <Slide className="section">
      <GalleryItem className="proj-gallery col-lg-offset-5">
          <img className="proj" src="img/beauty/beauty-6.jpg"/>
      </GalleryItem>
  </Slide>
];
fullPageOptions.slides = slides;




export default ({ data }) => {
  return (
    <Container>

      <Fullpage {...fullPageOptions} id="fullpage">

      </Fullpage>

          <div className="row proj-title col-lg-offset-8">
              <h4 className="proj-name col-lg-1 col-md-2 animated fadeInUp">BEAUTY</h4>
              <div className="extend proj-line"></div>
              <div className="clip">
                  <h4 className="proj-num col-lg-1 col-md-2"></h4>
              </div>
          </div>


    </Container>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    contentfulGallery(fields: { slug: { eq: $slug } }) {
      title
      fields {
        slug
      }
    }
  }
`
