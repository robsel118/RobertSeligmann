import React from 'react'
import Banner, { BannerLinks, BannerSubTitle, BannerTitle, BorderedButton } from '../components/shared/Banner'
import { GitHub, ExternalLink } from 'react-feather'
import Image from '../components/shared/Image'
interface Projects {
  projects: [
    {
      node: {
        frontmatter: {
          title: string
          description: String
          external?: string
          github?: string
          blog?: string
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

const Projects: React.FC<Projects> = ({ projects }) => {

  // const projects = data.filter(({ node }) => node);
  const projectsToShow = projects.map(({ node }) => node);
  console.log(projectsToShow)
  return (<section>
    {
      projectsToShow.map((project, index) => {
        
        const {frontmatter} = project;
        const { title, description, image, skills,external, github, blog, darkCover} = frontmatter;

        return (<Banner alignment="left" key={index} data-sal="slide-up"  data-sal-delay="100"  data-sal-duration="300" data-sal-easing="ease-out" isBackgroundDark={darkCover}>
          <Image title={title} fluid={image.childImageSharp.fluid} />
          <div>
            <BannerTitle>{title}</BannerTitle>
            <BannerSubTitle>{description}</BannerSubTitle>
            { blog && <BorderedButton to={blog}>Read More</BorderedButton>}
            { github &&  <a title="GitHub Repo" href={github} target='_blank' rel='noreferrer' ><GitHub/></a>}
            { external &&  <a title="Demo site" href={external} target='_blank' rel='noreferrer' ><ExternalLink/></a>}
          </div>
        </Banner>
        ) 
      })
    }
  </section>)
}

export default Projects;