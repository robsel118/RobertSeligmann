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
    grid-column: 2 /7;
    grid-row: 2 / span 3;
  }

  @media (min-width: ${breakpoints.lg}) {
    font-size: 3rem;
    grid-column: 1 / 6;
    grid-row: 2 / span 2;
  }
`
export const CTA = styled.div`
  @media (min-width: ${breakpoints.sm}) {
    grid-column: 2 /7;
    grid-row: 3 / span 1;
  }
  @media (min-width: ${breakpoints.lg}) {
    grid-column: 1 /4;
    grid-row: 3 / span 1;
  }
`
export const IntroContainer = styled.div`
  /* position: relative; */
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: ${breakpoints.sm}) {
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(4, minmax(100px, 1fr));
  }

  @media (min-width: ${breakpoints.lg}) {
    grid-template-rows: repeat(4, minmax(calc((100vmin - 64px) / 4), 210px));
  }

  /* IDEA Subgrid for healine and CTO */

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

  @media (min-width: ${breakpoints.sm}) {
    grid-column: 5 / span 3;
    grid-row: 2 / span 2;
  }

  @media (min-width: ${breakpoints.lg}) {
    grid-column: 5 /8;
    grid-row: 2 / auto;
    & > div::before {
      position: absolute;
      content: '';
      display: block;
      border: 2px solid #06d6a0;
      top: 1rem;
      left: 1rem;
      height: 100%;
      width: 100%;
    }
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
    svg {
      transition: stroke 0.3s linear;
      stroke: ${props => props.theme.linkColor};
    }
  }
  a:hover {
    svg {
      stroke: ${props => props.theme.linkColorHover};
    }
  }
`
