import styled from 'styled-components'
import { fonts } from '../../theme'

export const NavLinkcontainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  a {
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
  }
`

export const NavbarContainer = styled.div`
  display: table;
  width: 100%;
  position: -webkit-sticky;
  position: sticky;
  padding: 0.6rem 0;
  top: 0;
  z-index: 1;
  background-color: ${props => props.theme.background};
`
