import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 90px;
`

const AboutText = styled.div`

    margin: 0px 25px;
    text-transform: uppercase;
    font-size: 16px;
    letter-spacing: 2px;

    @media only screen and (min-width: 800px) {
      padding-top: 100px;
      margin: 0px 40px;
    }

`

const SocialLink = styled.div`

  margin-top: 12px;

  a {
    text-decoration: none;
    color: black;
  }
`

const LinkContainer = styled.div`

    position: fixed;
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing: 2px;
    bottom: 25px;
    left: 25px;

    @media only screen and (min-width: 800px) {
      left: 40px;
      bottom: 40px;
    }


`

const AboutPage = ({data}) => (
  <Container>

    <AboutText className="col-lg-4" dangerouslySetInnerHTML={{__html: data.contentfulAbout.aboutParagraph.aboutParagraph.replace(/(?:\r\n|\r|\n)/g, '<br />')}} />

    <LinkContainer>
      <SocialLink className="col-lg-">
        {data.contentfulAbout.phone}
      </SocialLink>

      <SocialLink>
        <a target="_none" href={`mailto:${data.contentfulAbout.email}/`}>
          {data.contentfulAbout.email}
        </a>

      </SocialLink>

      <SocialLink>
        <a target="_none" href={`https://www.instagram.com/${data.contentfulAbout.instagram}/`}>
          @{data.contentfulAbout.instagram}
        </a>
      </SocialLink>
    </LinkContainer>

  </Container>
)

export default AboutPage

export const query = graphql`
  query AboutQuery {
    contentfulAbout(title: { eq: "About"} ) {
      phone
      email
      instagram

      aboutParagraph {
        aboutParagraph
		  }
  	}
  }
`
