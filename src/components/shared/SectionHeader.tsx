import React from 'react'
import styled from 'styled-components'
import mixins from '@theme/mixins'

const SectionHeader = styled.p`
  ${mixins.teko}
  &::before{
    counter-increment: section;
    content: "0" counter(section) "."
  }
`

export default SectionHeader