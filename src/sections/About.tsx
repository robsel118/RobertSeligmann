import React from 'react'
import styled from 'styled-components'
import Grid from '@components/shared/Grid'
import mixins from '@theme/mixins'
import { fontSizes } from '@theme/styles'

const AboutText = styled.div`
  p{
    ${mixins.muli};
    font-size: ${fontSizes.lg};
    a{
      ${mixins.inlineLink};
    }
  }
`
export interface AboutProps {
  about: {
    edges:
    [{
      node :{
        frontmatter: {
          title: string
          linkToResume?: string
        }
        html: string
      }
    }]
}}

const About:React.FC<AboutProps> = ({about}) => {
  return (<Grid cols={2} style={{minHeight: 'calc(100vmin - 170px)'}}>
    <AboutText dangerouslySetInnerHTML={{ __html: about.edges[0].node.html }}>
      
    </AboutText>
      <a target="_blank" href={about.edges[0].node.frontmatter.linkToResume}>Download</a>
  </Grid>)
}

export default About