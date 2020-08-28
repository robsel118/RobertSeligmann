import React from 'react'
import Image from '@components/shared/Image'
import { Grid, AboutText } from './styles'



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
    <AboutText dangerouslySetInnerHTML={{ __html: about.edges[0].node.html }}/>
    <Image fluid={about.edges[0].node.frontmatter.photo.childImageSharp.fluid} style={{clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)'}} />
  </Grid>)
}

export default About