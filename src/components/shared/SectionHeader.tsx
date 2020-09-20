import styled from 'styled-components'
import mixins from '@theme/mixins'
import mediaMin from '@theme/media'

const SectionHeader = styled.p<{ contentBefore?: string }>`
  ${mixins.display};
  display: flex;
  position: relative;
  align-items:center;
  padding-top: 3rem;
  margin-bottom: 2rem;
  font-size: var(--fs-md);
  ${mediaMin.mobile` font-size: var(--fs-h3)`}

  &::before{
    position: relative;
    color: var(--cl-primary);
    counter-increment: section;
    content: ${({ contentBefore }) => contentBefore || '"0" counter(section) ". "'};
    margin-right: 0.5rem;
  }

  ${mediaMin.mobile`
    &::after{
      content:'';
      display: block;
      position: relative;
      top: 50%;
      height: 1px;
      width: 100%;
      max-width: 200px;
      margin-left: 1rem;
      background-color: var(--cl-text-main);
    }`
  }
`

export default SectionHeader