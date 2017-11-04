import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"

import GalleryItem from '../components/GalleryItem'

const Container = styled.div`

`

class GalleryPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeImage: 0
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
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
