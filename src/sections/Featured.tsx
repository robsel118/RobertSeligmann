import React from 'react'
import styled from 'styled-components'
import Banner, { BannerLinks, BannerSubTitle, BannerTitle, BorderedButton } from '../components/shared/Banner'
import SectionHeader from '../components/shared/SectionHeader'
import { GitHub, ExternalLink } from 'react-feather'
import Image from '../components/shared/Image'
import mixins from '@theme/mixins'

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
}
const SkillList = styled.div`
  display: block;
  margin: 2rem 0;
`

const Skill = styled.span`
  ${mixins.roboto}
  margin-right: 1rem;
`


const featured: React.FC<FeaturedProps> = ({ featured }) => {

  const featuredToShow = featured.edges.map(({ node }) => node);

  return (<section id='featured'  style={{minHeight: '100vh'}}>
    <SectionHeader>Featured Projects</SectionHeader>
    {
      featuredToShow.map((feature, index) => {

        const { frontmatter } = feature;
        const { title, description, image, skills, external, github, blog, darkCover } = frontmatter;

        return (<Banner alignment="left" key={index} data-sal="slide-up"  data-sal-duration="300" data-sal-easing="ease-out" isBackgroundDark={darkCover}>
          <Image title={title} fluid={image.childImageSharp.fluid} />
          <BannerTitle>{title}</BannerTitle>
          <BannerSubTitle>{description}</BannerSubTitle>
          <SkillList>
            {skills.map((skill, index) => <Skill key={index}>{skill}</Skill>)}
          </SkillList>
          <BannerLinks>
            {blog && <BorderedButton to={blog}>Read More</BorderedButton>}
            {github && <a title="GitHub Repo" href={github} target='_blank' rel='noreferrer' ><GitHub /></a>}
            {external && <a title="Demo site" href={external} target='_blank' rel='noreferrer' ><ExternalLink /></a>}
          </BannerLinks>
        </Banner>
        )
      })
    }
  </section>)
}

export default featured;