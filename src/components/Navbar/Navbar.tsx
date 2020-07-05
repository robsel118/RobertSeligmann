import React from 'react'
import Logo from '../shared/Logo'
import { NavbarContainer, NavbarLink, NavLinkcontainer } from './styles'

const Navbar = () => (<NavbarContainer>
    <Logo />
    <NavLinkcontainer>
        <NavbarLink to="/">Projects</NavbarLink>
        <NavbarLink to="/about">About</NavbarLink>
    </NavLinkcontainer>
</NavbarContainer>)

export default Navbar;

