import React, { useRef } from 'react'
import { Link } from 'gatsby'

import SectionHeader from '@components/shared/SectionHeader'
import Image from '@components/shared/Image'
import { FeaturedSection, FeaturedHeader, ProjectList, Card, CardText, CardDescription, CardContent, Skill, List } from './styles'
import { GitHub, Link as LinkIcon } from 'react-feather'
import useOnScreen from '@hooks/useOnScreen'

interface Project {
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

export interface FeaturedProps {
  featured: {
    edges: [
      {
        node: {
          frontmatter: Project
        }
      }
    ]
  }
}

const ProjectCard = ({ title, description, image, skills, internal, external, github }: Project) => {

  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;
  const onScreen = useOnScreen(ref, 0.3, true);

  return (
    <Card ref={ref} isOnScreen={onScreen}>
      <a href={external} target="_blank" rel="noreferrer noopener" ><Image title={title} fluid={image.childImageSharp.fluid} /></a>
      <CardContent>
        <FeaturedHeader>Featured Project</FeaturedHeader>
        <CardText>{title}</CardText>
        <CardDescription>{description}</CardDescription>
        <List>
          {skills.map((skill, index) => <Skill key={index}>{skill}</Skill>)}
        </List>
        <List>
          {internal && <Link to={internal}><LinkIcon /></Link>}
          {github && <a href={github} target="_blank" rel="noreferrer noopener" ><GitHub /></a>}
        </List>
      </CardContent>
    </Card>);
}

const featured: React.FC<FeaturedProps> = ({ featured }) => {

  const featuredToShow = featured.edges.map(({ node }) => node);
  return (<FeaturedSection>
    <SectionHeader>What I've worked on</SectionHeader>
    <ProjectList>
      {
        featuredToShow.map((feature, index: number) => {

          const { frontmatter } = feature;
          return (<ProjectCard key={index} {...frontmatter}></ProjectCard>
          )
        })
      }
    </ProjectList>
  </FeaturedSection>)
}

export default featured;