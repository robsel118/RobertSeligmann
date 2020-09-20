import styled from 'styled-components'
import mixins from '@theme/mixins'
import mediaMin from '@theme/media'
import * as Dot from '@images/dot.svg'

export const AboutText = styled.div`
  p {
    font-size: var(--fs-main);
    a {
      ${mixins.inlineLink};
    }
  }
`

export const Grid = styled.div`
  margin: 1.5rem 0;
  grid-column-gap: 3rem;
  grid-row-gap: 2rem;
  flex-direction: column;
  min-height: calc(100vmin - 170px);
  ${mixins.flexCenter};
  ${mixins.grid};
  ${mediaMin.tablet`
  grid-template-columns:45% 35%;
  justify-content: space-betweeen;
`}
`

export const ImageContainer = styled.div`
  filter: contrast(90%);
  ${mixins.flexCenter};

  & > div {
    max-width: 350px;
    img {
      background: var(--cl-primary);
    }
  }
  ${mediaMin.tablet`

    & > div {
      overflow: visible !important;

      &::before {
        position: absolute;
        content: '';
        display: block;
        top: 4rem;
        left: 3rem;
        height: 100%;
        width: 100%;
        background-size: 20px;
        background-repeat: repeat;
        background-color: var(--cl-primary);
        -webkit-mask-image: url(${Dot});
        mask-image: url(${Dot});
      }
    }
    `}
`
