import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'


//import './index.css'
import '../assets/css/grid.css'
import '../assets/css/animate.css'
import '../assets/css/styles.css'

import logo from '../assets/images/logo.svg'

const HeaderContainer = styled.nav`
  width: 100%;
  height: 60px;
  top: 0;
  position: fixed;
  z-index: 100;
  display: flex;
  justify-content: space-between;

  a {
    margin: calc(20px + 1%);
    flex: 1;
  }

`

const Logo = styled.img`
  width: 200px;
  transform: scale(1.01);
  transition: opacity 200ms ease-in-out;
  opacity: 1;

  &:hover {
    opacity: 0.6;
  }

  @media (hover:none), (hover:on-demand) {
    &:hover {
      opacity: 1;
    }
  }


`

const AboutLink = styled(Link)`
  font-size: 10pt;
  letter-spacing: 5px;
  text-decoration: none;
  color: black;
  text-align: right;
  transition: opacity 200ms ease-in-out;
  opacity: 1;

  @media (hover:hover) {
      nav a:hover{
          background: yellow;
      }
  }



  &:hover {
    opacity: 0.5;
  }

  @media (hover:none), (hover:on-demand) {
    &:hover {
      opacity: 1;
    }
  }

`

const Header = () => (
  <HeaderContainer>
      <Link to="/">
          <Logo src={logo}/>
      </Link>

      <AboutLink to="/about/">ABOUT</AboutLink>

  </HeaderContainer>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Nelson Huang"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    <Header />

    <div>
      {children()}
    </div>

  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
