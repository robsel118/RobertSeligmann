import styled from 'styled-components'
import { Title } from './Typography'
import { fonts, themes } from '../../theme'

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
  image: string
  isBackgroundDark?: boolean
}

const Hero = styled.div<HeroProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 2rem 0;
  padding: 1.5rem;
  background-position: 50% 50%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("${props => props.image}");
  min-height: 38rem;

  p {
    color: ${props =>
      props.isBackgroundDark
        ? themes.light.textColor
        : themes.dark.textColor} !important;
  }

`

export default Hero
