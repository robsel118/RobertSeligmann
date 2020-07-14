import React from 'react'
import styled from 'styled-components'
import mixins from '@theme/mixins'
import {color} from '@theme/styles'
import mediaMin from '@theme/media'

const SectionHeader = styled.p<{ contentBefore?: string }>`
  ${mixins.teko}
  display: flex;
  position: relative;
  align-items:center;
  padding-top: 3rem;
  margin-bottom: 5rem;
  font-size: 1.4rem;
  ${mediaMin.sm` font-size: 2rem;`}
  &::before{
    position: relative;
    color: ${color.caribbeanGreen};
    counter-increment: section;
    content: ${props => props.contentBefore || '"0" counter(section) ". "'}
  }
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
  }
`

export default SectionHeader