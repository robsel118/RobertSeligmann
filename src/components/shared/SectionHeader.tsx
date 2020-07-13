import React from 'react'
import styled from 'styled-components'
import mixins from '@theme/mixins'
import {color} from '@theme/styles'

const SectionHeader = styled.p`
  ${mixins.teko}
  display: flex;
  position: relative;
  align-items:center;
  padding-top: 3rem;
  margin-bottom: 5rem;
  &::before{
    position: relative;
    color: ${color.caribbeanGreen};
    counter-increment: section;
    content: "0" counter(section) ". "
  }
  &::after{
    content:'';
    display: block;
    position: relative;
    top: 50%;
    height: 1px;
    width: 200px;
    margin-left: 1rem;
    background-color: gray;
  }
`

export default SectionHeader