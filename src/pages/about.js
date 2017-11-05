import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 90px;
`

const AboutText = styled.div`


  p {
    line-height: 1.6;
  }
`

const PhoneNum = styled.p`

`

const Email = styled.p`

`

const AboutPage = ({data}) => (
  <Container>

    <AboutText dangerouslySetInnerHTML={{__html: data.contentfulAbout.aboutParagraph.aboutParagraph.replace(/(?:\r\n|\r|\n)/g, '<br />')}} />

    <PhoneNum>
      {data.contentfulAbout.phone}
    </PhoneNum>

    <Email>
      {data.contentfulAbout.email}
    </Email>

  </Container>
)

export default AboutPage

export const query = graphql`
  query AboutQuery {
    contentfulAbout(title: { eq: "About"} ) {
      phone
      email

      aboutParagraph {
        aboutParagraph
		  }
  	}
  }
`
