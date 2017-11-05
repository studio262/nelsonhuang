import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'


const gridLayout = [
  {grid: "col-lg-offset-8 col-lg-3 col-xs-offset-5 col-xs-7", rise: false}, //Beauty
  {grid: "col-lg-offset-1 col-lg-3 col-xs-offset-1 col-xs-6", rise: true}, // Zombie Boy
  {grid: "col-lg-offset-7 col-lg-2 col-xs-offset-5 col-xs-6", rise: false}, // Lucrece
  {grid: "col-lg-offset-0 col-lg-4 col-xs-offset-1 col-xs-5", rise: false}, // Eve (Look into overriding xs grid)
  {grid: "col-lg-offset-8 col-lg-3 col-xs-offset-8 col-xs-4", rise: true}, //Dissembled
  {grid: "col-lg-offset-2 col-lg-2 col-xs-offset-2 col-xs-5", rise: false}, // Crystal
  {grid: "col-lg-offset-7 col-lg-3 col-xs-offset-7 col-xs-4", rise: false}, // Colour / OG Collection Ends <3
  {grid: "col-lg-offset-0 col-lg-4 col-xs-offset-0 col-xs-6", rise: true}, //Beauty
  {grid: "col-lg-offset-8 col-lg-3 col-xs-offset-1 col-xs-5", rise: true}, // Zombie Boy
  {grid: "col-lg-offset-3 col-lg-2 col-xs-offset-5 col-xs-6", rise: false}, // Lucrece
  {grid: "col-lg-offset-7 col-lg-3 col-xs-offset-1 col-xs-5", rise: false}, // Eve
  {grid: "col-lg-offset-1 col-lg-3 col-xs-offset-8 col-xs-4", rise: true}, //Dissembled
  {grid: "col-lg-offset-8 col-lg-2 col-xs-offset-2 col-xs-5", rise: false}, // Crystal
  {grid: "col-lg-offset-2 col-lg-3 col-xs-offset-7 col-xs-4", rise: false}, // Colour
  {grid: "col-lg-offset-8 col-lg-3 col-xs-offset-5 col-xs-6", rise: true}, //Beauty
  {grid: "col-lg-offset-1 col-lg-3 col-xs-offset-1 col-xs-5", rise: true}, // Zombie Boy
  {grid: "col-lg-offset-7 col-lg-2 col-xs-offset-5 col-xs-6", rise: false}, // Lucrece
  {grid: "col-lg-offset-0 col-lg-3 col-xs-offset-1 col-xs-5", rise: false}, // Eve
  {grid: "col-lg-offset-8 col-lg-4 col-xs-offset-8 col-xs-4", rise: true}, //Dissembled
  {grid: "col-lg-offset-1 col-lg-2 col-xs-offset-2 col-xs-5", rise: false}, // Crystal
  {grid: "col-lg-offset-7 col-lg-3 col-xs-offset-7 col-xs-4", rise: false}, // Colour
]


const GalleryLinkContainer = styled.div`
  transition: opacity .3s ease-in-out;
  &:hover {
    opacity: .7;
  }
`

const Title = styled.div`
  position: relative;
  margin: 0;
`

const Line = styled.div`
  background-color: #4F4F4F;
  margin-left: 25px;
  margin-bottom: 4px;
  margin-right: 10px;
  width: 25px;
  height: 1px;
  display: inline-block;
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
          <Img sizes={props.thumbnailImageSizes}
              backgroundColor={"#f2f2f2"}
              fadeIn={true}/>
        </Link>

        <Title>
            <h2>{props.title}</h2>
            <h3><Line/>{props.number}</h3>
        </Title>
      </GalleryLinkContainer>
    </Row>
  )
}




const IndexPage = ({ data }) => {
  let galleryOne = data.allContentfulGallery.edges;
  const doubleGallery = galleryOne.concat(data.allContentfulGallery.edges);
  const tripleGallery = doubleGallery.concat(data.allContentfulGallery.edges);

  return(
    <div>
      <main className="animated fadeInUp">
          <div className="row push"></div>

          {tripleGallery.map(({ node }, i) =>
            <GalleryLink
              gridLayout={i}
              key={i}
              slug={node.fields.slug}
              title={node.title.toUpperCase()}
              number={("0" + (i+1)).slice(-2)}
              thumbnailImageSizes={node.thumbnailImage.sizes}/>
          )}

          <div className="row push"></div>
      </main>
    </div>
  )
}


export default IndexPage


export const query = graphql`
  query HomepageQuery {
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
