import styled from 'styled-components'
import { fonts, breakpoints } from '../../theme/styles'
import { HeaderPopDown } from '../../theme/animation'

export const NavLinkcontainer = styled.div`
  display: block;
  float: right;

  /* a {
    float: right;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-family: ${fonts.teko};
    font-size: 1.25rem;
    margin-left: 2rem;
    color: ${props => props.theme.linkColor};
    text-decoration: none;
    &:hover {
      color: ${props => props.theme.linkColorHover};
    }
  } */
`

export const NavbarContainer = styled.div`
  display: table;
  width: 100%;
  position: sticky;
  top: 0;
  padding: 0.5rem 0;
  top: 0.4rem 0;
  z-index: 1;
  background-color: ${props => props.theme.background};
  margin-top: 0;
`

export const ContentRow = styled.div`
  width: 100%;
  display: table;
  padding: 0 1rem;
  @media (min-width: ${breakpoints.lg}) {
    max-width: 1024px;
    margin: 0 auto;
  }

  @media (min-width: ${breakpoints.xl}) {
    max-width: 1280px;
    margin: 0 auto;
  }
`
export const IconList = styled.ul`
  float: right;
  display: block;
  list-style: none;
`

export const IconLink = styled.li`
  a {
    float: right;
    position: relative;
    svg {
      stroke: white;
      &:hover {
        stroke: gray;
      }
    }
  }
`

export const HeaderContainer = styled.div`
  position: relative;
  top: -4rem;
  display: block;
  background-color: #333333;
  height: 4rem;
  animation: ${HeaderPopDown} 0.5s ease-in-out forwards;
`

export const Navlink = styled.li`
  margin: 0.5rem 1rem;
  padding: 0;
  float: right;
  a {
    float: right;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-family: ${fonts.teko};
    font-size: 1.25rem;
    color: white;
    text-decoration: none;

    &:hover {
      color: gray;
    }
    svg {
      stroke: white;
      &:hover {
        stroke: gray;
      }
    }
  }
`

export const LinkList = styled.ul`
  margin: 0;
  padding: 0;
  float: right;
  list-style: none;

  li {
    margin: 1rem 1.5rem 1rem 1rem;
  }
  &.icons li {
    margin: 1rem 0.8rem;
  }
`
