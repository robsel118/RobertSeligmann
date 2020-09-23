import styled from 'styled-components'
import mixins from '@theme/mixins'
import media from '@theme/media'
import * as Dot from '@images/dot.svg'

export const Grid = styled.div`
  ${mixins.flexCenter};
  ${mixins.grid};
  ${media.tablet`
    grid-template-columns:55% 30%;
    justify-content: space-betweeen;
`}
`

export const AboutText = styled.div`
  max-width: 90%;
  p {
    font-size: var(--fs-main);
    a {
      ${mixins.inlineLink};
    }
  }
  ul {
    ${mixins.grid}
    grid-template-columns: 1fr 1fr;
    width: 100%;
    padding: 0;
    margin: 2rem 0;
    grid-row-gap: 1rem;
    list-style-type: none;
    li {
      letter-spacing: 0.03rem;
      font-family: var(--ff-mono);
      font-size: var(--fs-sm);

      &::before {
        content: '○';
        position: relative;
        font-size: var(--fs-sm);
        left: 0;
        margin-right: 5px;
        color: var(--cl-primary);
      }
    }
  }
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
  ${media.tablet`

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
