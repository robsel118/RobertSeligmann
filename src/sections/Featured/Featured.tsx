import React from 'react'
import SectionHeader from '@components/shared/SectionHeader'
import Image from '@components/shared/Image'
import { FeaturedSection, FeaturedHeader, ProjectList, Card, CardText, CardDescription, CardContent, RedirectButton, Skill, SkillList } from './styles'

export interface FeaturedProps {
  featured: {
    edges: [
      {
        node: {
          frontmatter: {
            title: string
            description: String
            internal?: string
            external: string
            darkCover: boolean
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
          const { title, description, image, skills, internal, external} = frontmatter;

          return (<Card key={index} data-sal="slide-up" data-sal-duration="300" data-sal-easing="ease-out">
            <a href={external} target="_blank"><Image title={title} fluid={image.childImageSharp.fluid} /></a>
            <CardContent>
              <FeaturedHeader>Featured Project</FeaturedHeader>
              <CardText>{title}</CardText>
              <CardDescription>{description}</CardDescription>
              <SkillList>
                {skills.map((skill, index) => <Skill key={index}>{skill}</Skill>)}
              </SkillList>
                {internal ?  <RedirectButton to={internal}>Read More</RedirectButton> : <p>Coming Soon</p>}
               
            </CardContent>
          </Card>
          )
        })
      }
    </ProjectList>
  </FeaturedSection>)
}

export default featured;