import styled from 'styled-components'
import Image from './Image'
import { Link } from 'gatsby'
import { Title, Paragraph } from './Typography'
import { fonts, themes, breakpoints } from '../../theme/styles'

export const BannerTitle = styled(Title)`
  font-size: 2.5rem;
  line-height: 2rem;
  margin: 0 0;
  @media (min-width: ${breakpoints.md}) {
    line-height: 3.5rem;
  }
`

export const BannerSubTitle = styled(Paragraph)`
  font-size: 1rem;
  font-weight: 500;
  margin: 1rem 0 4rem 0 !important;
  @media (min-width: ${breakpoints.md}) {
    font-size: 1.1rem;
  }
`

export const BannerLinks = styled.div`
  display: flex;
  align-items: center;
`

export const BorderedButton = styled(Link)`
  text-decoration: none;
  border: 2px solid;
  margin-right: 2rem;
  font-family: ${fonts.teko};
  padding: 0.8rem 1.5rem;
  transition: all 0.3s linear;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 2px;
`

interface BannerProps {
  alignment?: string
  isBackgroundDark?: boolean
}

const Banner = styled.div<BannerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${props => props.alignment || 'center'};
  margin: 2rem 0;
  min-height: 30rem;
  position: relative;
  padding-left: 4rem;

  @media (max-width: ${breakpoints.md}) {
    padding: 1rem;
  }

  ${Image} {
    filter: brightness(75%);
    position: absolute !important;
    border-radius: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    border: 1px solide red;
  }

  p {
    margin: 0.5rem 0;
    color: ${props =>
      props.isBackgroundDark
        ? themes.dark.textColor
        : themes.light.textColor} !important;
  }
  a > svg {
    margin-right: 1rem;
    stroke: ${props =>
      props.isBackgroundDark
        ? themes.dark.linkColor
        : themes.light.linkColor} !important;
    &:hover {
      stroke: ${props =>
        props.isBackgroundDark
          ? themes.light.linkColorHover
          : themes.dark.linkColorHover} !important;
    }
  }
  ${BorderedButton} {
    border-color: ${props =>
      props.isBackgroundDark ? themes.dark.textColor : themes.light.textColor};

    color: ${props =>
      props.isBackgroundDark
        ? themes.dark.textColor
        : themes.light.textColor} !important;
    &:hover {
      color: ${props =>
        props.isBackgroundDark
          ? themes.light.textColor
          : themes.dark.textColor} !important;
      background-color: ${props =>
        props.isBackgroundDark
          ? themes.dark.textColor
          : themes.light.textColor} !important;
    }
  }
`

export default Banner
