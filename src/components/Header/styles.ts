import styled from 'styled-components'
import { themes, fontSizes, color } from '../../theme/styles'
import { HeaderPopDown } from '../../theme/animation'
import mediaMin from '@theme/media'
import mixins from '@theme/mixins'

export const NavLinkcontainer = styled.div`
  display: block;
`
export const Line = styled.div`
  margin: 0 auto;
  height: 1px;
  width: 50%;
  background-color: ${({ theme }) => theme.onBackground};
  opacity: 50%;
`

export const ContentRow = styled.div`
  padding: 0 0 0 1rem;
  ${mixins.flexBetween};
  ${mixins.contentSpace};
`

export const HeaderContainer = styled.div`
  display: block;
  grid-area: header-start / header-start / header-end / header-end;
  position: relative;
  top: -4rem;
  background-color: ${themes.dark.background};
  height: 4rem;
  animation: ${HeaderPopDown} 0.5s ease-in-out forwards;
  z-index: 999;
`

export const Navlink = styled.li`
  /* margin: 0.5rem 1rem; */
  padding: 0;
  float: right;
  a {
    ${mixins.teko}
    font-size: ${fontSizes.lg};
    color: white;
    text-decoration: none;
    &:hover {
      color: ${color.caribbeanGreen};
    }
  }
`

export const LinkList = styled.ul`
  margin: 0;
  padding: 0;
  float: right;
  display: none;
  ${mediaMin.sm`display: block;`}

  li {
    margin: 0 1.5rem 0rem 1rem;
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
      ${mixins.transitionAll}
    }
    line:first-child {
      opacity: ${({ expanded }) => (expanded ? '0' : '1')};
    }
    line:nth-child(2) {
      transform: ${({ expanded }) =>
        expanded ? 'translateY(15px) rotate(-45deg)' : 'none'};
    }
    line:last-child {
      transform: ${({ expanded }) =>
        expanded ? 'translate3d(17px, -10px, 0px) rotate(45deg)' : 'none'};
    }
  }
`

export const CollapsibleMenu = styled.div<CollapsibleMenuProps>`
  transition: all 0.5s ease-in-out;
  visibility: ${({ expanded }) => (expanded ? 'visible' : 'hidden')};
  background-color: #111;
  z-index: 1000;
  display: block;
  max-height: ${({ expanded }) => (expanded ? '80vh' : '0')};
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
