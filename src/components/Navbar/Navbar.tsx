import React from 'react'
import Logo from '../shared/Logo'
import Layout from '../shared/Layout'
import ThemeToggleButton from '../shared/ThemeToggleButton'
import { Link } from 'gatsby'

import { NavbarContainer, NavLinkcontainer } from './styles'

export const Header = () => (
  <NavbarContainer>
    <Layout>
      <Logo height="2.4rem" width="2.6rem" />
      <NavLinkcontainer>
        <Link to="/">Projects</Link>
        <Link to="/about">About</Link>
        <ThemeToggleButton />
      </NavLinkcontainer>
    </Layout>
  </NavbarContainer>
)

export const Footer = () => (
  <NavbarContainer>
    <Layout>
      <Logo />
      <NavLinkcontainer>
        <a href="https://github.com/robsel118">GitHub</a>
        <a href="https://www.linkedin.com/in/robert-seligmann/">LinkedIn</a>
      </NavLinkcontainer>
    </Layout>
  </NavbarContainer>
)


