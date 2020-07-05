import React from 'react'
import Logo from '../shared/Logo'
import { NavbarContainer, NavbarLink, NavLinkcontainer } from './styles'

export const Header = () => (
  <NavbarContainer>
    <Logo />
    <NavLinkcontainer>
      <NavbarLink to="/">Projects</NavbarLink>
      <NavbarLink to="/about">About</NavbarLink>
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


