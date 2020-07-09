import React from 'react'
import styled from 'styled-components'
import { FlatIcon } from '../shared/Neumorphic'
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

export const IntroText = styled.div`
  align-items: center;
`

export const Headline = styled.h1`
  font-family: ${fonts.archivo};
  font-size: 6vw;
  color: ${props => props.theme.textColor};

  @media (min-width: ${breakpoints.lg}) {
    font-size: 3.75rem;
  }
`

export const Line = styled.div`
  height: 1px;
  width: 200px;
  background-color: gray;
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
