import React from 'react'
import { Link } from 'gatsby'

import SectionHeader from '@components/shared/SectionHeader'
import Image from '@components/shared/Image'
import { FeaturedSection, FeaturedHeader, ProjectList, Card, CardText, CardDescription, CardContent, Skill, List } from './styles'
import { GitHub, Link as LinkIcon } from 'react-feather'

export interface FeaturedProps {
  featured: {
    edges: [
      {
        node: {
          frontmatter: {
            title: string
            description: string
            internal: string
            github: string
            external: string
            skills: [string]
            image: {
              childImageSharp: {
                fluid: any;
              }
            }
          }
        }
      }
    ]
  }
}



const featured: React.FC<FeaturedProps> = ({ featured }) => {

  const featuredToShow = featured.edges.map(({ node }) => node);
  return (<FeaturedSection>
    <SectionHeader>What I've worked on</SectionHeader>
    <ProjectList>
      {
        featuredToShow.map((feature, index) => {

          const { frontmatter } = feature;
          const { title, description, image, skills, internal, external, github} = frontmatter;

          return (<Card key={index} data-sal="slide-up" data-sal-duration="300" data-sal-easing="ease-out">
            <a href={external} target="_blank" rel="noreferrer noopener" ><Image title={title} fluid={image.childImageSharp.fluid} /></a>
            <CardContent>
              <FeaturedHeader>Featured Project</FeaturedHeader>
              <CardText>{title}</CardText>
              <CardDescription>{description}</CardDescription>
              <List>
                {skills.map((skill, index) => <Skill key={index}>{skill}</Skill>)}
              </List>
              <List>
              { internal && <Link to={internal}><LinkIcon/></Link> }
              { github && <a href={github} target="_blank" rel="noreferrer noopener" ><GitHub/></a>}
              </List>
            </CardContent>
          </Card>
          )
        })
      }
    </ProjectList>
  </FeaturedSection>)
}

export default featured;