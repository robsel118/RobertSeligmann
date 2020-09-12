import styled from 'styled-components'
import Image from './Image'
import { Title, Paragraph } from './Typography'
import { themes, fontSizes } from '@theme/styles'
import mediaMin from '@theme/media'

export const BannerTitle = styled(Title)`
  font-size: ${fontSizes.xxxl};
  line-height: 100%;
  margin: 0 0;
  ${mediaMin.tablet`line-height: 3.5rem;`}
`

export const BannerSubTitle = styled(Paragraph)`
  font-size: ${fontSizes.md};
  font-weight: 500;
  margin: 1rem 0 2.5rem 0 !important;
  ${mediaMin.tablet`font-size: ${fontSizes.lg}`}
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

  ${mediaMin.mobile`padding-left: 3rem;`}

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
`

export default Banner
