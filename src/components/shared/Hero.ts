import styled from 'styled-components'
import Image from '../shared/Image'
import { Title } from './Typography'
import { fonts, themes } from '../../theme/styles'

export const HeroTitle = styled(Title)`
  font-size: 3rem;
  line-height: 3.5rem;
  margin: 0 0;
  &::before {
    content: '·';
  }
`

export const HeroSubTitle = styled.p`
  font-family: ${fonts.muli};
  font-size: 1rem;
  margin: 0 0;
`

interface HeroProps {
  image?: string
  isBackgroundDark?: boolean
}

const Hero = styled.div<HeroProps>`
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

export default Hero
