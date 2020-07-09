import styled from 'styled-components'
import Image from './Image'
import { Title } from './Typography'
import { fonts, themes } from '../../theme/styles'

export const BannerTitle = styled(Title)`
  font-size: 3rem;
  line-height: 3.5rem;
  margin: 0 0;
  &::before {
    content: '·';
  }
`

export const BannerSubTitle = styled.p`
  font-family: ${fonts.muli};
  font-size: 1rem;
  margin: 0 0;
`

interface BannerProps {
  image?: string
  isBackgroundDark?: boolean
}

const Banner = styled.div<BannerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  min-height: 38rem;
  position: relative;

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
    margin: 0.5rem 1rem;
    color: ${props =>
      props.isBackgroundDark
        ? themes.light.textColor
        : themes.dark.textColor} !important;
  }
`

export default Banner
