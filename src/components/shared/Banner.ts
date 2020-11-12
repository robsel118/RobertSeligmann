import styled from 'styled-components'
import Image from './Image'
import media from '@theme/media'

export const BannerTitle = styled.h1`
  font-size: var(--fs-3xl);
  line-height: 100%;
  margin: 0 0;
  color: var(--white);
  ${media.tablet`
    line-height: 3.5rem;
    font-size: var(--fs-4xl);
  `}
`

export const BannerSubTitle = styled.h2`
  font-size: var(--fs-xl);
  color: var(--white);
  font-weight: 500;
  margin: 1rem 0 2.5rem 0 !important;
  ${media.tablet`font-size: var(--fs-lg)`}
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

  ${media.mobile`padding-left: 3rem;`}

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
