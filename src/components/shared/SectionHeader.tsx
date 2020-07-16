import React from 'react'
import styled from 'styled-components'
import mixins from '@theme/mixins'
import { fontSizes } from '@theme/styles'
import mediaMin from '@theme/media'

const SectionHeader = styled.p<{ contentBefore?: string }>`
  ${mixins.teko}
  display: flex;
  position: relative;
  align-items:center;
  padding-top: 3rem;
  margin-bottom: 5rem;
  font-size: ${fontSizes.xl};
  ${mediaMin.sm` font-size: ${fontSizes.xxl}`}

  &::before{
    position: relative;
    color: ${({theme}) => theme.primary};
    counter-increment: section;
    content: ${({ contentBefore }) => contentBefore || '"0" counter(section) ". "'};
    margin-right: 0.5rem;
  }

  ${mediaMin.sm`
    &::after{
      content:'';
      display: block;
      position: relative;
      top: 50%;
      height: 1px;
      width: 100%;
      max-width: 200px;
      margin-left: 1rem;
      background-color: gray;
    }`
  }
`

export default SectionHeader