import React from 'react'
import Image from '@components/shared/Image'
import { Grid, AboutText, ImageContainer } from './styles'
import SectionHeader from '@components/shared/SectionHeader'


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
  return (<Grid>
    <div>
      <SectionHeader>About Me</SectionHeader>
      <AboutText dangerouslySetInnerHTML={{ __html: about.edges[0].node.html }}/>
    </div>
    <ImageContainer>
      <Image fluid={about.edges[0].node.frontmatter.photo.childImageSharp.fluid}  />
    </ImageContainer>
  </Grid>)
}

export default About