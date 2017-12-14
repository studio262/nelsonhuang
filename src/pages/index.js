import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'


const gridLayout = [
  {grid: "col-lg-offset-8 col-lg-3 col-md-offset-6 col-md-6 col-xs-offset-2 col-xs-10", rise: false}, //Beauty
  {grid: "col-lg-offset-1 col-lg-3 col-md-offset-0 col-md-5 col-xs-8", rise: true}, // Zombie Boy
  {grid: "col-lg-offset-7 col-lg-2 col-xs-offset-3 col-xs-9", rise: false}, // Lucrece
  {grid: "col-lg-offset-0 col-lg-4 col-xs-8", rise: false}, // Eve
  {grid: "col-lg-offset-8 col-lg-3 col-xs-offset-3 col-xs-9", rise: true}, //Dissembled
  {grid: "col-lg-offset-2 col-lg-2 col-xs-8", rise: false}, // Crystal
  {grid: "col-lg-offset-7 col-lg-3 col-xs-offset-2 col-xs-10", rise: false}, // Colour / OG Collection Ends <3
  {grid: "col-lg-offset-1 col-lg-4 col-xs-offset-4 col-xs-8", rise: true}, //Beauty
  {grid: "col-lg-offset-8 col-lg-3 col-xs-9", rise: true}, // Zombie Boy
  {grid: "col-lg-offset-3 col-lg-2 col-xs-offset-4 col-xs-8", rise: false}, // Lucrece
  {grid: "col-lg-offset-7 col-lg-3 col-xs-offset-2 col-xs-10", rise: false}, // Eve
  {grid: "col-lg-offset-1 col-lg-3 col-xs-8", rise: true}, //Dissembled
  {grid: "col-lg-offset-8 col-lg-2 col-xs-offset-3 col-xs-9", rise: false}, // Crystal
  {grid: "col-lg-offset-2 col-lg-3 col-xs-10", rise: false}, // Colour
  {grid: "col-lg-offset-8 col-lg-3 col-xs-offset-4 col-xs-8", rise: true}, //Beauty
  {grid: "col-lg-offset-1 col-lg-3 col-xs-10", rise: true}, // Zombie Boy
  {grid: "col-lg-offset-7 col-lg-2 col-xs-8", rise: false}, // Lucrece
  {grid: "col-lg-offset-2 col-lg-3 col-xs-offset-3 col-xs-9", rise: false}, // Eve
  {grid: "col-lg-offset-8 col-lg-4 col-xs-offset-4 col-xs-8", rise: true}, //Dissembled
  {grid: "col-lg-offset-1 col-lg-2 col-xs-10", rise: false}, // Crystal
  {grid: "col-lg-offset-7 col-lg-3 col-xs-offset-3 col-xs-9", rise: false}, // Colour
]


const GalleryLinkContainer = styled.div`
  transition: opacity .3s ease-in-out;
  &:hover {
    opacity: .7;
  }
`

const TitleBox = styled.div`
  position: relative;
  margin: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    align-self: flex-end;
    text-align: right;
  }

`

const Title = styled.h2`

`

const LineBox = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`

const Line = styled.div`
  background-color: #4F4F4F;
  margin-left: 10px;
  margin-right: 10px;
  height: 1px;
  width: 100%;
  max-width: 25px;
  flex: 1;
`

const TopMargin = styled.div`
  margin-bottom: 150px;

  @media only screen and (max-width: 800px) {
    mar0px;
  }
`;


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

        <TitleBox>

            <h2>{props.title}</h2>
            <LineBox>
              <Line/>
            </LineBox>
            <h3>{props.number}</h3>

        </TitleBox>
      </GalleryLinkContainer>
    </Row>
  )
}




const IndexPage = ({ data }) => {
  let gallery = data.allContentfulGallery.edges;

  return(
    <div>
      <main className="animated fadeInUp">
          <TopMargin></TopMargin>

          {gallery.map(({ node }, i) =>
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
