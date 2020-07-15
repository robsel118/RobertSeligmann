import styled from 'styled-components'
import Image from './Image'
import { Link } from 'gatsby'
import { Title, Paragraph } from './Typography'
import { themes, fontSizes } from '@theme/styles'
import mediaMin from '@theme/media'
import mixins from '@theme/mixins'

export const BannerTitle = styled(Title)`
  font-size: ${fontSizes.xxxl};
  line-height: 100%;
  margin: 0 0;
  ${mediaMin.md`line-height: 3.5rem;`}
`

export const BannerSubTitle = styled(Paragraph)`
  font-size: ${fontSizes.md};
  font-weight: 500;
  margin: 1rem 0 2.5rem 0 !important;
  ${mediaMin.md`font-size: ${fontSizes.lg}`}
`

export const BannerLinks = styled.div`
  display: flex;
  align-items: center;
`

export const BorderedButton = styled(Link)`
  ${mixins.teko};
  ${mixins.transitionAll};
  font-size: ${fontSizes.lg};
  text-decoration: none;
  border: 2px solid;
  margin-right: 2rem;
  padding: 0.8rem 1.5rem;
`

export const SkillList = styled.div`
  display: block;
  margin: 2rem 0;
`

export const Skill = styled.span`
  ${mixins.roboto}

  &:not(:first-child)::before {
    content: '  ·  ';
  }
`

interface BannerProps {
  alignment?: string
  isBackgroundDark?: boolean
}

const Banner = styled.div<BannerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ alignment }) => alignment || 'center'};
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
  }

  p,
  ${Skill} {
    /* margin: 0.5rem 0; */
    color: ${({ isBackgroundDark }) =>
      isBackgroundDark ? themes.dark.reverse : themes.light.reverse} !important;
  }
  a > svg {
    margin-right: 1rem;
    stroke: ${({ isBackgroundDark }) =>
      isBackgroundDark ? themes.dark.reverse : themes.light.reverse};
  }
  ${BorderedButton} {
    border-color: ${({ isBackgroundDark }) =>
      isBackgroundDark ? themes.dark.reverse : themes.light.reverse};
    color: ${({ isBackgroundDark }) =>
      isBackgroundDark ? themes.dark.reverse : themes.light.reverse};
    &:hover {
      color: ${({ isBackgroundDark }) =>
        isBackgroundDark ? themes.light.reverse : themes.dark.reverse};
      background-color: ${({ isBackgroundDark }) =>
        isBackgroundDark ? themes.dark.reverse : themes.light.reverse};
    }
  }
`

export default Banner
