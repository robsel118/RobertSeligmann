import React from 'react'
import styled from 'styled-components'
import { fonts, breakpoints, themes } from '../../theme/styles'

export const Socials = styled.div`
  margin-left: 1.25rem;
  width: auto;
  height: auto;
  display: flex;
`

export const IntroSocials = styled.div`
  display: flex;
  align-items: center;
`

export const HiddenBackground = styled.div`
  position: relative;
  flex: 1;
  z-index: 2;
  background-color: black;
`

export const Headline = styled.h1`
  /* position: absolute; */
  /* position: relative; */

  grid-column-start: 1;
  grid-row-start: 1;
  @media (min-width: ${breakpoints.sm}) {
    grid-column-end: 7;
    grid-row-start: 4;
    grid-row-end: 5;
  }

  font-family: ${fonts.muli};
  font-size: 6vw;
  color: ${props => props.theme.bw};
  z-index: 4;
  color: black;
  filter: blur(0.2px);
  @media (min-width: ${breakpoints.lg}) {
    font-size: 3rem;
  }
`

export const IntroContainer = styled.div`
  /* position: relative; */
  width: 100%;
  height: 90vh;
  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: repeat(8, 1fr);

  @media (min-width: ${breakpoints.sm}) {
    grid-template-columns: repeat(8, 1fr);
  }

  ${Headline}:nth-child(2) {
    z-index: 9;
    color: white;
    /* color: ${props =>
      props.theme == themes.light ? 'white' : '#181818'}; */
    mix-blend-mode: color-dodge;
  }
  ${Headline}:nth-child(3) {
    z-index: 10;
    /* mix-blend-mode: exclusion;
    color: #181818; */
    mix-blend-mode: exclusion;
    color: ${props => (props.theme == themes.light ? 'black' : 'white')};
  }
`

export const ImageContainer = styled.div`
  z-index: 5;

  position: relative;

  @media (min-width: ${breakpoints.sm}) {
    grid-column-start: 5;
    grid-column-end: 8;
    grid-row-start: 3;
    grid-row-end: 6;
  }
  filter: contrast(90%);
  @media (min-width: ${breakpoints.sm}) {
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
