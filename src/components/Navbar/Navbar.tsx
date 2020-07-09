import React from 'react'
import { Link } from 'gatsby'
import { GitHub, Linkedin , Sun} from 'react-feather'
import Logo from '../shared/Logo'
import { Social, } from '../Intro/styles'
import Layout from '../shared/Layout'
import ThemeToggleButton from '../shared/ThemeToggleButton'
import { NavbarContainer, NavLinkcontainer, HeaderContainer, ContentRow, IconLink, IconList, LinkList, Navlink } from './styles'

interface SocialButtonProps {
  title: string
  url: string
  classname: string
  children: React.ReactNode
}


const SocialButton: React.FC<SocialButtonProps> = ({
  title,
  url,
  classname,
  children
}) => (
    <a target="_blank" rel="noreferrer" title={title} href={url}>
      <Social>
        <svg
          className={classname}
          width="25"
          height="25"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {children}
        </svg>
      </Social>
    </a>
  )

export const Header = () => (
  <HeaderContainer>
    <ContentRow>
      <Logo />
      <NavLinkcontainer>
        <LinkList>
          {/* <LinkList className="icons">
            <Navlink><a target="_blank" href="https://github.com/robsel118"><GitHub /></a></Navlink>
            <Navlink><a target="_blank" href="https://www.linkedin.com/in/robert-seligmann/"><Linkedin /></a></Navlink>
          </LinkList> */}
          <Navlink><ThemeToggleButton/></Navlink>
        
          <Navlink><Link to="/">Projects</Link></Navlink>
          <Navlink><Link to="/about">About</Link></Navlink>
        </LinkList>
        {/* <Link to="/">Projects</Link>
      <Link to="/about">About</Link>
        <IconList>
          <IconLink>
            <a href="https://github.com/robsel118"><GitHub/></a>
          </IconLink>
          <IconLink>
            <a href="https://www.linkedin.com/in/robert-seligmann/"><Linkedin/></a>
          </IconLink>
          <IconLink>
          </IconLink>
        </IconList> */}
      </NavLinkcontainer>
    </ContentRow>
  </HeaderContainer>
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


// <NavbarContainer>
// <Layout>
//   <Logo height="2.4rem" width="2.6rem" />
//   <NavLinkcontainer>
//     <Link to="/">Projects</Link>
//     <Link to="/about">About</Link>
//     <ThemeToggleButton />
//   </NavLinkcontainer>
// </Layout>
// </NavbarContainer>