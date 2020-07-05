import React from "react"
import styled from "styled-components"
import { FlatIcon } from "../shared/Neumorphic"
import { fonts, breakpoints } from "../../theme"

export const Socials = styled.div`
  margin-left: 1.25rem;
  width: auto;
  height: auto;
  display: flex;
`

export const HeaderSocials = styled.div`
  display: flex;
  align-items: center;
`

export const HeaderText = styled.div`
  align-items: center;
`
export const Line = styled.div`
  height: 1px;
  width: 200px;
  background-color: gray;
`
export const Social = styled(FlatIcon)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 3rem;
  margin: 0 1rem;

  background-repeat: no-repeat;
  background-size: 3rem 3rem;
  background-position: center center;
  transition-duration: 0.5s;

  svg {
    display: block;
    margin: auto;
  }

  &:hover {
    .git,
    .linkedin,
    .light,
    .light-on {
      path {
        fill: ${props => props.theme.textColor};
      }
    }
  }
  .git,
  .linkedin,
  .light,
  .light-on {
    path {
      transition-duration: 0.5s;
      fill: ${props => props.theme.linkColor};
    }
  }
`

export const Headline = styled.h1`
  font-family: ${fonts.archivo};
  font-size: 6vw;
  color: ${props => props.theme.textColor};

  @media (min-width: ${breakpoints.lg}) {
    font-size: 3.75rem;
  }
`
