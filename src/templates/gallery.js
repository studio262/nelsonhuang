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

    this.animating = 0;

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('mousewheel', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('mousewheel', this.handleScroll);
  }

  handleScroll(event) {
    let delta = event.deltaY;
    let length = this.props.data.contentfulGallery.galleryImages.length;
    let newActive = -1;

    if (delta < 0 && this.state.activeImage >= 0) {
      newActive = this.state.activeImage - 1;
    }
    if (delta > 0) {
      newActive = this.state.activeImage + 1;
    }


    if (newActive >= 0) {
      if (newActive > length-1) {
        newActive = 0;
      }

      this.setState({
        activeImage: newActive
      });
    }


    console.log(newActive)
  }

  render() {
    return (
      <Container>
          {this.props.data.contentfulGallery.galleryImages.map((image, i) =>
            <GalleryItem
              key={image.id}
              active={i === this.state.activeImage}
              sizes={image.sizes}
              offset={300}/>
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
