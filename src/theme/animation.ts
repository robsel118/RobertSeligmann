import { keyframes } from 'styled-components'

export const HeaderPopDown = keyframes`
    to {
       transform:  translateY(100%)
    }
`
export const SlideLeft = keyframes`
    from {
      transform: translateX(100px);
    }
    to {
       transform:  translateX(0)
    }
`

export const FadeIn = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`
