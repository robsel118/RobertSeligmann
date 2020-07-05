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
  .git,
  .linkedin,
  .light,
  .light-on {
    path {
      transition-duration: 0.5s;
      fill: ${props => props.theme.icon};
    }
  }

  .git:hover,
  .linkedin:hover,
  .light:hover {
    path {
      fill: ${props => props.theme.textColor};
    }
  }

  .light-on {
    path {
      fill: #00f3ff;
      text-shadow: 2rem 2rem 2rem #00f3ff;
    }
  }
`

export const Headline = styled.h1`
  font-family: ${fonts.muli};
  font-size: 6vw;
  color: ${props => props.theme.textColor};

  @media (min-width: ${breakpoints.lg}) {
    font-size: 3.75rem;
  }
`
