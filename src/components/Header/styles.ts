import styled from 'styled-components'
import { fonts, breakpoints, themes } from '../../theme/styles'
import { HeaderPopDown } from '../../theme/animation'
import mediaMin from '@theme/media'
import mixins from '@theme/mixins'

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

export const ContentRow = styled.div`
  display: block;
  padding: 0 0 0 1rem;

  ${mediaMin.lg`
    max-width: 800px;
    margin: 0 auto;
    padding: 0;`}

  ${mediaMin.xl`
    max-width: 1000px;
    margin: 0 auto;
  `}
`

export const HeaderContainer = styled.div`
  grid-area: header-start / header-start / header-end / header-end;
  position: relative;
  top: -4rem;
  display: block;
  background-color: ${themes.dark.background};
  height: 4rem;
  animation: ${HeaderPopDown} 0.5s ease-in-out forwards;
  z-index: 999;
`

export const Navlink = styled.li`
  margin: 0.5rem 1rem;
  padding: 0;
  float: right;
  a {
    ${mixins.teko}
    font-size: 1.25rem;
    color: white;
    text-decoration: none;

    &:hover {
      color: #06d6a0;
    }
  }
`

export const LinkList = styled.ul`
  margin: 0;
  padding: 0;
  float: right;
  list-style: none;
  display: none;
  ${mediaMin.sm`display: block;`}

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
  display: inline;
  cursor: pointer;
  ${mediaMin.sm`display: none;`}

  svg {
    margin: 1rem 1.5rem 1rem 1rem;

    line {
      transition: all 0.3s ease-in-out;
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

  ${mediaMin.sm`
    visibility: hidden;
    max-width: 0;`}
  ${Navlink} {
    float: inherit;
    display: block;
    margin: 1.5rem auto;
  }
`
