import styled from "styled-components"
import { Link } from "gatsby"
import { fonts } from "../../theme"

export const NavbarLink = styled(Link)`
  display: inline-block;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: ${fonts.teko};
  font-size: 1.25rem;
  margin-left: 2rem;
  color: ${props => props.theme.linkColor};
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.linkColorHover};
  }
`
export const NavLinkcontainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const NavbarContainer = styled.div`
  width: 100%;
  display: inline-block;
`
