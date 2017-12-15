import React from 'react'
import styled from 'styled-components'

const ErrorText = styled.div `

  text-transform: uppercase;
  margin: 100px 0px 0px 25px;

  @media only screen and (min-width: 800px) {
    margin: 150px 0px 150px 40px;
  }


`

const NotFoundPage = () => (

  <ErrorText>
    <p>404 — Page Not Found</p>
  </ErrorText>
)

export default NotFoundPage
