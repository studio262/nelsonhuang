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

  ul {
      margin: 0;
      padding-left: 4px;
      right: 30px;
      top: 15px;
      position: fixed;
      list-style: none;
  }

  ul li {
      font-size: 10pt;
      display: inline-block;
      letter-spacing: 5px;
  }

  ul li a {
      color: black;
      text-decoration: none;
  }

  ul li a:hover {
      color: grey;
  }
`

const Logo = styled.img`
  width: 205px;
  transform: scale(1.01);
`

const Header = () => (
  <HeaderContainer>
      <Link to="/">
          <Logo id="logo" src={logo}/>
      </Link>
      <ul>
          <li><Link to="/about/">ABOUT</Link></li>
      </ul>
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
