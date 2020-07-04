import React from "react"
import styled from "styled-components"
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
export const Social = styled.div`
  height: 2rem;
  width: 2rem;
  margin: 0 1rem;
  background-repeat: no-repeat;
  background-size: 2rem 2rem;
  background-position: center center;
  transition-duration: 0.5s;

  .git,
  .linkedin {
    path {
      transition-duration: 0.5s;
    }
  }

  .git:hover {
    path {
      fill: black;
    }
  }

  .linkedin:hover {
    path {
      fill: #2867b2;
    }
  }
`

export const Headline = styled.h1`
  font-family: ${fonts.muli};
  font-size: 6vw;
  @media (min-width: ${breakpoints.lg}) {
    font-size: 3.75rem;
  }
`
