import React from 'react'
import SectionHeader from '@components/shared/SectionHeader'
import { GitHub, ExternalLink, ChevronsRight } from 'react-feather'
import Image from '@components/shared/Image'
import { FeaturedSection, FeaturedHeader, ProjectList, Card, CardText, CardDescription, CardContent, BannerLinks, BorderedButton, Skill, SkillList } from './styles'

export interface FeaturedProps {
  featured: {
    edges: [
      {
        node: {
          frontmatter: {
            title: string
            description: String
            external?: string
            github?: string
            internal?: string
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
    <SectionHeader>Featured Projects</SectionHeader>
    <ProjectList>
      {
        featuredToShow.map((feature, index) => {

          const { frontmatter } = feature;
          const { title, description, image, skills, external, github, internal} = frontmatter;

          return (<Card key={index} data-sal="slide-up" data-sal-duration="300" data-sal-easing="ease-out">
            <Image title={title} fluid={image.childImageSharp.fluid} />
            <CardContent>
              <FeaturedHeader>Featured Project</FeaturedHeader>
              <CardText>{title}</CardText>
              <CardDescription>{description}</CardDescription>
              <SkillList>
                {skills.map((skill, index) => <Skill key={index}>{skill}</Skill>)}
              </SkillList>
              <BannerLinks>
                {github && <BorderedButton to={internal}>Read More <ChevronsRight/> </BorderedButton>}
               
              </BannerLinks>
            </CardContent>
          </Card>
          )
        })
      }
    </ProjectList>
  </FeaturedSection>)
}

export default featured;