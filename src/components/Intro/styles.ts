import React from 'react'
import styled from 'styled-components'
import { fonts, breakpoints, themes } from '../../theme/styles'

export const Headline = styled.h1`
  font-family: ${fonts.muli};

  color: ${props => props.theme.bw};
  z-index: 4;
  color: black;
  filter: blur(0.2px);
  grid-area: 1 / 1 / -1 / -1;

  @media (min-width: ${breakpoints.sm}) {
    font-size: 2rem;
    grid-column: 1 / 1;
    grid-row: 1 / 1;
  }

  @media (min-width: ${breakpoints.lg}) {
    font-size: 3rem;
    grid-column: 1 / 1;
    grid-row: 1 / 1;
  }
`
export const CTA = styled.div`
  @media (min-width: ${breakpoints.sm}) {
    grid-column: 1 / -1;
    grid-row: 2 / 2;
  }
  @media (min-width: ${breakpoints.lg}) {
    grid-column: 1 / -1;
    grid-row: 2 / 2;
  }
`

export const IntroTextContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;

  @media (min-width: ${breakpoints.sm}) {
    grid-column: 2 / 5;
    grid-row: 2 / -1;
  }

  @media (min-width: ${breakpoints.lg}) {
    grid-column: 1 / 7;
    grid-row: 2 / -2;
  }
`

export const IntroContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;

  @media (min-width: ${breakpoints.sm}) {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(4, minmax(100px, 1fr));
  }

  @media (min-width: ${breakpoints.lg}) {
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(4, minmax(calc((100vmin - 100px) / 4), 210px));
  }

  ${Headline}:nth-child(2) {
    z-index: 9;
    color: white;
    mix-blend-mode: color-dodge;
  }
  ${Headline}:nth-child(3) {
    z-index: 10;
    mix-blend-mode: exclusion;
    color: ${props => (props.theme == themes.light ? 'black' : 'white')};
  }
`

export const ImageContainer = styled.div`
  z-index: 5;
  position: relative;
  filter: contrast(90%);
  grid-column: 1 / 1;
  grid-row: 2 / 2;
  @media (min-width: ${breakpoints.sm}) {
    grid-column: 4 / span 2;
    grid-row: 2 / -1;
    & > div {
      overflow: visible !important;
      &::before {
        position: absolute;
        content: '';
        display: block;
        border: 2px solid #06d6a0;
        top: 1.5rem;
        left: 1.5rem;
        height: 100%;
        width: 100%;
      }
    }
  }

  @media (min-width: ${breakpoints.lg}) {
    grid-column: 5 /8;
    grid-row: 2 / auto;
  }
`

export const Line = styled.div`
  height: 1px;
  width: 80px;
  background-color: gray;
`

export const SocialContainer = styled.div`
  display: table;
  padding: 1rem 0;
  a {
    margin-right: 0.8rem;
  }
`
