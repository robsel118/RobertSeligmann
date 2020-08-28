import styled from 'styled-components'

import mixins from '@theme/mixins'
import mediaMin from '@theme/media'
import { fontSizes } from '@theme/styles'

export const CTA = styled.div`
  ${mediaMin.mobile`
   grid-column: 1 / -1;
   grid-row: 2 / auto;
   `}
  ${mediaMin.laptop`
   grid-column: 1 / -1;
   grid-row: 2 / auto;`}
`

export const IntroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const IntroContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  ${mediaMin.mobile`
   grid-template-columns: 60% 40%;
   grid-column-gap: 1rem;
 `}
`

export const IntroWrapper = styled.div`
  ${mixins.flexCenter};
  width: 100%;
  min-height: calc(100vmin - 64px);
  position: relative;
`

export const ImageContainer = styled.div`
  z-index: 5;
  position: relative;
  filter: contrast(90%);

  & > div {
    img {
      background: ${({ theme }) => theme.primary};
    }
  }
  ${mediaMin.mobile`

    & > div {
      overflow: visible !important;
      &::before {
        position: absolute;
        content: '';
        display: block;
        top: 1rem;
        left: 1rem;
        height: 100%;
        width: 100%;
        border: 2px solid ${({ theme }) => theme.primary};
      }
    }
    `}
`

export const Statement = styled.div`
 position: relative;

 p{
   ${mediaMin.tablet`font-size: 1.2rem; max-width: 80%;`}
   line-height: 140%;
   a{
     ${mixins.inlineLink}
   }
 }
 h1 {
   ${mixins.heading}
   z-index: 4;
   grid-area: 1 / 1 / -1 / -1;
   margin: 0.5rem 0 0 0;
   ${mixins.heading}
   ${mediaMin.mobile`
     grid-column: 1 / 1;
     grid-row: 1 / auto;`}

   ${mediaMin.laptop`
     grid-column: 1 / 1;
     grid-row: 1 / auto;
   `}

   &::before{
     content: "Hi there, my name is";
     display: block;
     color: ${({ theme }) => theme.primary};
     font-size: ${fontSizes.lg};
   }
 }
 h2{
   color: ${({ theme }) => theme.onBackground};
   font-size: ${fontSizes.xl};
   ${mediaMin.mobile`font-size: ${fontSizes.xxl}`}
   margin: 0.5rem 0 1rem 0;
 }
`
export const Line = styled.div`
  height: 1px;
  width: 80px;
  background-color: ${({ theme }) => theme.onBackground};
`

export const SocialContainer = styled.div`
  display: table;
  padding: 1rem 0;
  a {
    margin-right: 0.8rem;
  }
`