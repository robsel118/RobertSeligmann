import styled from 'styled-components'
import { fonts, breakpoints } from '../../theme/styles'
import { HeaderPopDown } from '../../theme/animation'

export const NavLinkcontainer = styled.div`
  display: block;
  float: right;
`
export const Line = styled.div`
  margin: 0 auto;
  height: 1px;
  width: 50%;
  background-color: gray;
  opacity: 50%;
`

export const NavbarContainer = styled.div`
  display: table;
  width: 100%;
  position: sticky;
  top: 0;
  padding: 0.8rem 0;
  top: 0.4rem 0;
  z-index: 1;
  background-color: ${props => props.theme.background};
  margin-top: 0;
`

export const ContentRow = styled.div`
  display: block;
  padding: 0 0 0 1rem;

  @media (min-width: ${breakpoints.lg}) {
    max-width: 1024px;
    margin: 0 auto;
    padding: 0;
  }

  @media (min-width: ${breakpoints.xl}) {
    max-width: 1280px;
    margin: 0 auto;
  }
`

export const HeaderContainer = styled.div`
  position: relative;
  top: -4rem;
  display: block;
  background-color: #09182d;
  height: 4rem;
  animation: ${HeaderPopDown} 0.5s ease-in-out forwards;
  z-index: 999;
`

export const Navlink = styled.li`
  margin: 0.5rem 1rem;
  padding: 0;
  float: right;
  a {
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

  @media (max-width: ${breakpoints.sm}) {
    display: none;
  }

  li {
    margin: 1.2rem 1.5rem 0rem 1rem;
  }
  &.icons li {
    margin: 1rem 0.8rem;
  }
`

interface CollapsibleMenuProps {
  expanded: boolean
}

export const CollapseButton = styled.ul<CollapsibleMenuProps>`
  margin: 0;
  display: none;
  cursor: pointer;
  @media (max-width: ${breakpoints.sm}) {
    display: inline;
  }

  svg {
    margin: 1rem 1.5rem 1rem 1rem;

    line {
      transition: all 0.5s ease-in-out;
    }
    line:first-child {
      opacity: ${props => (props.expanded ? '0' : '1')};
    }
    line:nth-child(2) {
      transform: ${props =>
        props.expanded ? 'translateY(15px) rotate(-45deg)' : 'none'};
    }
    line:last-child {
      transform: ${props =>
        props.expanded
          ? 'translate3d(17px, -10px, 0px) rotate(45deg)'
          : 'none'};
    }
  }
`

export const CollapsibleMenu = styled.div<CollapsibleMenuProps>`
  transition: all 0.5s ease-in-out;
  visibility: ${props => (props.expanded ? 'visible' : 'hidden')};
  background-color: #111;
  z-index: 1000;
  display: block;
  max-height: ${props => (props.expanded ? '80vh' : '0')};
  overflow: hidden;
  width: 100%;
  position: absolute;
  top: 4rem;
  text-align: center;
  @media (min-width: ${breakpoints.sm}) {
    visibility: hidden;
    max-width: 0;
  }
  ${Navlink} {
    float: inherit;
    display: block;
    margin: 1.5rem auto;
  }
`
