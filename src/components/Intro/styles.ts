import React from 'react'
import styled from 'styled-components'
import { fonts, breakpoints } from '../../theme/styles'

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

export const IntroContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 70vh;
`

export const Headline = styled.h1`
  position: relative;
  font-family: ${fonts.muli};
  font-size: 6vw;
  font-weight: bold;
  color: ${props => props.theme.bw};
  z-index: 9;

  @media (min-width: ${breakpoints.lg}) {
    font-size: 3.75rem;
  }
`
export const IntroText = styled.div`
  align-items: center;
`

export const ImageContainer = styled.div`
  z-index: 5;
  min-width: 40rem;
  position: absolute;
  top: 0;
  right: 0;
  filter: contrast(90%);
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

export const Social = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  width: 2.5rem;
  margin: 0 1rem;
  background-repeat: no-repeat;
  background-size: 2.5rem 2.5rem;
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
      path,
      rect,
      circle,
      line {
        stroke: ${props => props.theme.textColor};
      }
    }
  }
  .git,
  .linkedin,
  .light,
  .light-on {
    path,
    rect,
    circle,
    line {
      fill: none;
      stroke-width: 2;
      stroke-linecap: 'round';
      stroke-linejoin: 'round';
      transition-duration: 0.5s;
      stroke: ${props => props.theme.linkColor};
    }
  }
`
