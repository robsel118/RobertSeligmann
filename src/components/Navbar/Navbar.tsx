import React from 'react'
import Logo from '../shared/Logo'
import ThemeToggleButton from '../shared/ThemeToggleButton'
import { Link } from 'gatsby'

import { NavbarContainer, NavLinkcontainer } from './styles'

export const Header = () => (
  <NavbarContainer>
      <Logo />
    <NavLinkcontainer>
      <Link to="/">Projects</Link>
      <Link to="/about">About</Link>
      <ThemeToggleButton />
    </NavLinkcontainer>
  </NavbarContainer>
)

export const Footer = () => (
  <NavbarContainer>
    <Logo />
    <NavLinkcontainer>
      <a href="https://github.com/robsel118">GitHub</a>
      <a href="https://www.linkedin.com/in/robert-seligmann/">LinkedIn</a>
    </NavLinkcontainer>
  </NavbarContainer>
)


