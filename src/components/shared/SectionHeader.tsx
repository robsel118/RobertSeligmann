import styled from 'styled-components'
import mixins from '@theme/mixins'
import media from '@theme/media'

const SectionHeader = styled.h2<{ contentBefore?: string }>`
  ${mixins.display};
  display: flex;
  position: relative;
  align-items:center;
  padding-top: 3rem;
  margin-bottom: 2rem;
  font-size: var(--fs-xl);
  ${media.tablet` font-size: var(--fs-2xl)`}

  ${media.mobile`
    &::after{
      content:'';
      display: block;
      position: relative;
      top: 50%;
      height: 1px;
      width: 100%;
      max-width: 300px;
      margin-left: 1rem;
      background-color: var(--cl-text-main);
    }`
  }
`

export default SectionHeader