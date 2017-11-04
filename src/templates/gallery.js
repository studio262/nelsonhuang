import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"

import GalleryItem from '../components/GalleryItem'

const Container = styled.div`
  display: flex;
  height: 90vh;
  justify-content: center;
`

class GalleryPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeImage: 0
    }

    this.lastScrollTop = 0;

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    let scrollTop = event.srcElement.body.scrollTop;
    if (scrollTop > this.lastScrollTop) {

    } else if (scrollTop < this.lastScrollTop) {

    }

    this.lastScrollTop = scrollTop
  }

  render() {
    return (
      <Container>
          {this.props.data.contentfulGallery.galleryImages.map((image) =>
            <GalleryItem key={image.id} sizes={image.sizes}/>
          )}
      </Container>
    )
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    contentfulGallery(fields: { slug: { eq: $slug } }) {
      title
      galleryImages {
        id
        sizes(maxWidth: 600) {
          ...GatsbyContentfulSizes
        }
      }

      fields {
        slug
      }
    }
  }
`

export default GalleryPage;
