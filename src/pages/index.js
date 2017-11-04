import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'

const gridLayout = [
  {grid: "col-lg-offset-4 col-lg-5 col-md-offset-2 col-md-5", rise: false},
  {grid: "col-lg-offset-3 col-lg-3 col-md-offset-2 col-md-5", rise: false},
  {grid: "col-lg-offset-6 col-lg-3 col-md-offset-2 col-md-5", rise: false},
  {grid: "col-lg-offset-6 col-lg-3 col-md-offset-2 col-md-5", rise: false},
  {grid: "col-lg-offset-6 col-lg-3 col-md-offset-2 col-md-5", rise: false},
  {grid: "col-lg-offset-6 col-lg-3 col-md-offset-2 col-md-5", rise: false},
  {grid: "col-lg-offset-6 col-lg-3 col-md-offset-2 col-md-5", rise: false},
  {grid: "col-lg-offset-6 col-lg-3 col-md-offset-2 col-md-5", rise: false},
  {grid: "col-lg-offset-6 col-lg-3 col-md-offset-2 col-md-5", rise: false},
  {grid: "col-lg-offset-6 col-lg-3 col-md-offset-2 col-md-5", rise: false},
]


const GalleryLinkContainer = styled.div`

`

const Title = styled.div`
  position: relative;
  margin: 0;
`

const Line = styled.div`
  background-color: #4F4F4F;
`

const Row = (props) => (
  <div className={props.rise ? 'row rise' : 'row' }>
    {props.children}
  </div>
)


const GalleryLink = (props) => {
  return (
    <Row rise={gridLayout[props.gridLayout].rise}>
      <GalleryLinkContainer className={gridLayout[props.gridLayout].grid}>
        <Link to={props.slug}>
          <Img sizes={props.thumbnailImageSizes}/>
        </Link>

        <Title>
            <h2>COLOUR</h2>
            <h3><Line/>01</h3>
        </Title>
      </GalleryLinkContainer>
    </Row>
  )
}


const IndexPage = ({ data }) => (
  <div>
    <main className="animated fadeInUp">
        <div className="row push"></div>

        {data.allContentfulGallery.edges.map(({ node }, i) =>
          <GalleryLink
            gridLayout={i}
            key={node.id}
            slug={node.fields.slug}
            thumbnailImageSizes={node.thumbnailImage.sizes}/>
        )}

    </main>
  </div>
)


export default IndexPage


export const query = graphql`
  query TeaserQuery {
    allContentfulGallery {
      edges {
        node {
          id
          title

          fields {
            slug
          }

          thumbnailImage {
            id
            sizes(maxWidth: 600) {
              ...GatsbyContentfulSizes_noBase64
            }
          }
        }
      }
    }
  }
`
