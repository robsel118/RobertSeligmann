import React from 'react'
import Logo from '../shared/Logo'
import ThemeToggleButton from '../shared/ThemeToggleButton'
import { NavbarContainer, NavbarLink, NavLinkcontainer } from './styles'

export const Header = () => (
  <NavbarContainer>
      <Logo />
    <NavLinkcontainer>
      <NavbarLink to="/">Projects</NavbarLink>
      <NavbarLink to="/about">About</NavbarLink>
      <ThemeToggleButton />
    </NavLinkcontainer>
  </NavbarContainer>
)

export const Footer = () => (
  <NavbarContainer>
    <Logo />
    <NavLinkcontainer>
      <NavbarLink to="/">Projects</NavbarLink>
      <NavbarLink to="/about">About</NavbarLink>
    </NavLinkcontainer>
  </NavbarContainer>
)


