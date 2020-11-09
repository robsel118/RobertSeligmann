import styled from 'styled-components'
import { HeaderPopDown } from '../../theme/animation'
import media from '@theme/media'
import mixins from '@theme/mixins'

export const NavLinkcontainer = styled.div`
  display: block;
`
export const Line = styled.div`
  margin: 0 auto;
  height: 1px;
  width: 50%;
  background-color: var(--cl-text-alt);
  opacity: 50%;
`

export const ContentRow = styled.div`
  height: 100%;
  margin: 0;
  ${mixins.flexBetween};
  ${mixins.contentSpace};
`

export const HeaderContainer = styled.nav`
  width: 100;
  display: block;
  grid-area: header-start / header-start / header-end / header-end;
  position: relative;
  top: -4rem;
  height: 4rem;
  animation: ${HeaderPopDown} 0.5s ease-in-out forwards;
  z-index: 10;
`

export const Navlink = styled.li`
  padding: 0;
  float: right;

  height: var(--min-press-size);
  min-width: var(--min-press-size);
  line-height: var(--min-press-size);
  a {
    margin: auto 0;
    ${mixins.display}
    font-size: var(--fs-lg);
    color: var(--cl-text-alt);

    text-decoration: none;
    &:hover {
      color: var(--cl-primary);
    }
  }
`

export const LinkList = styled.ul`
  margin: 0;
  padding: 0;
  float: right;
  display: none;
  ${media.mobile`
    display: flex;
    flex-direction: row;
    align-items: center;
  `}

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
  ${media.mobile`display: none;`}
  svg {
    margin: 1rem 1.5rem 1rem 1rem;
    stroke: var(--cl-text-alt);

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
  background-color: var(--background-alt);
  z-index: 1000;
  display: block;
  max-height: ${({ expanded }) => (expanded ? '80vh' : '0')};
  overflow: hidden;
  width: 100%;
  position: absolute;
  top: 4rem;
  text-align: center;

  ${media.mobile`
    visibility: hidden;
    max-width: 0;`}

  ${Navlink} {
    float: inherit;
    display: block;
    margin: 1.5rem auto;
  }
`

export const ResumeButton = styled.a.attrs({
  href: '/resume.pdf',
  target: '_blank',
  rel: 'noreferrer',
})`
  border: 2px solid var(--cl-primary);
  padding: 0.25rem 0.75rem;
  border-radius: 8px;
  color: var(--cl-primary) !important;
  ${mixins.transitionAll};
  &:hover {
    background-color: var(--cl-primary-tint);
  }
`
