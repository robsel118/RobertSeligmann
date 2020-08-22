import React from 'react'
import styled from 'styled-components'
import Grid from '@components/shared/Grid'
import Image from '@components/shared/Image'
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
          photo: {
            childImageSharp: {
              fluid: any;
            }
          }
        }
        html: string
      }
    }]
}}

const About:React.FC<AboutProps> = ({about}) => {
  return (<Grid cols={2} style={{minHeight: 'calc(100vmin - 170px)'}}>
    <AboutText dangerouslySetInnerHTML={{ __html: about.edges[0].node.html }}/>
    <Image fluid={about.edges[0].node.frontmatter.photo.childImageSharp.fluid} style={{clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)'}} />
  </Grid>)
}

export default About