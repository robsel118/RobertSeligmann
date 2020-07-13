import styled from 'styled-components'
import Image from './Image'
import { Link } from 'gatsby'
import { Title, Paragraph } from './Typography'
import { themes, breakpoints } from '@theme/styles'
import mediaMin from '@theme/media'
import mixins from '@theme/mixins'

export const BannerTitle = styled(Title)`
  font-size: 2.5rem;
  line-height: 2rem;
  margin: 0 0;
  ${mediaMin.md`line-height: 3.5rem;`}
`

export const BannerSubTitle = styled(Paragraph)`
  font-size: 1rem;
  font-weight: 500;
  margin: 1rem 0 4rem 0 !important;
  ${mediaMin.md`font-size: 1.1rem;`}
`

export const BannerLinks = styled.div`
  display: flex;
  align-items: center;
`

export const BorderedButton = styled(Link)`
  ${mixins.teko}
  text-decoration: none;
  border: 2px solid;
  margin-right: 2rem;
  padding: 0.8rem 1.5rem;
  transition: all 0.3s linear;
  font-size: 1.2rem;
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
  padding: 1rem;

  ${mediaMin.sm`padding-left: 3rem;`}

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
