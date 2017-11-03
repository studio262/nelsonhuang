import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <main className="animated fadeInUp">
        <div className="row push"></div>
        <div className="row">
            <div className="col-lg-offset-8 col-lg-3
                        col-md-offset-7 col-md-5">
                <a href="pages/colour.html">
                    <img src="img/colour/colour-4.jpg"/>
                </a>
                <div className="title title-left">
                    <h2>COLOUR</h2>
                    <h3><div className="line"></div>01</h3>
                </div>
            </div>
        </div>
        <div className="row rise">
            <div className="col-lg-offset-1 col-lg-3
                        col-md-offset-1 col-md-4">
                <a href="pages/beauty.html">
                    <img src="img/beauty/beauty-1.jpg"/>
                </a>
                <div className="title title-right">
                    <h2>BEAUTY</h2>
                    <h3><div className="line"></div>02</h3>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-offset-7 col-lg-2
                        col-md-offset-7 col-md-3">
                <a href="pages/portraits.html">
                    <img src="img/portraits/portrait-1.jpg"/>
                </a>
                <div className="title title-right">
                    <h2>PORTRAITS</h2>
                    <h3><div className="line"></div>03</h3>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4
                        col-md-4">
                <a href="pages/crystal.html">
                    <img src="img/crystal/crystal-1.jpg"/>
                </a>
                <div className="title title-right">
                    <h2>CRYSTAL</h2>
                    <h3><div className="line"></div>04</h3>
                </div>
            </div>
        </div>
        <div className="row rise">
            <div className="col-lg-offset-8 col-lg-3
                        col-md-offset-7">
                <a href="pages/dissembled.html">
                    <img src="img/dissembled/dissembled-2.jpg"/>
                </a>
                <div className="title title-left">
                    <h2>DISSEMBLED</h2>
                    <h3><div className="line"></div>05</h3>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-offset-2 col-lg-2
                        col-md-offset-2 col-md-3">
                <a href="pages/eve.html">
                    <img src="img/eve/eve-5.jpg"/>
                </a>
                <div className="title title-right">
                    <h2>EVE</h2>
                    <h3><div className="line"></div>06</h3>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-offset-7 col-lg-4
                        col-md-offset-7 col-md-4">
                <a href="pages/zombieboy.html">
                    <img src="img/zombie-boy/zombie-11.jpg"/>
                </a>
                <div className="title title-left">
                    <h2>ZOMBIE BOY</h2>
                    <h3><div className="line"></div>07</h3>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-offset-1 col-lg-3 rise
                        col-md-4">
                <a href="pages/lucrece.html">
                    <img src="img/lucrece/lucrece-3.jpg"/>
                </a>
                <div className="title title-right">
                    <h2>LUCRECE</h2>
                    <h3><div className="line"></div>08</h3>
                </div>
            </div>
        </div>
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
          galleryImages {
            id
          }
        }
      }
    }
  }
`
