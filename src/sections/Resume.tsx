import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Briefcase } from 'react-feather'
import SectionHeader from '@components/shared/SectionHeader'
import { fonts, fontSizes } from '@theme/styles'
import mixins from '@theme/mixins'
import { SlideLeft, FadeIn } from '@theme/animation'

const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  width: 100%;
`

const Tab = styled.div`
  margin: 1rem auto;
  justify-content: center;
  align-items: center;
  height: 3rem;
`

interface Props {
  selected: boolean
}
const TabItem = styled(Link).attrs({
  to: '/about#resume'
}) <{ selected: boolean }>`
  ${mixins.teko};
  font-size: ${fontSizes.lg};
  margin: 0 1rem;
  box-shadow: ${({ selected }) => selected ? 'inset 0 -0.8rem' : 'inset 0 -0.2rem'} ${({ theme }) => theme.primary};
  
  transition: all 0.3s ease-in-out;
  &:hover{
    padding-bottom: 0.2em;
  }
`
const ResumeSection = styled.section`
  min-height: calc(90vmin - 80px);
  animation: ${SlideLeft} 0.4s ease-in-out forwards, ${FadeIn} 0.4s ease-in-out forwards;
  transform: translateX(100px);
  opacity: 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  transition: transform 0.4s ease-in-out;

`
const SkillsSection = styled.div`
  h1 {
    ${mixins.muli};
    font-size: ${fontSizes.lg};
  }
  ul{
    ${mixins.grid()}
    width: 100%;
    padding: 0;
    margin: 2rem 0;
    grid-row-gap: 1rem; 
    list-style-type: none;
    li{
      display: grid;
      grid-template-columns:  auto 1fr 1fr;
      ${mixins.roboto}
      letter-spacing: 0.03rem;

      code {
        ${mixins.roboto}
        font-weight: 300;
      }

      &::before{
        content: "○";
        position: relative;
        left: 0;
        margin-right: 5px;
        color: ${({ theme }) => theme.primary};
      }
    }
  }

`
export const Section = styled.div`
  width: 100%
`
export const SectionTitle = styled.p`
  font-family: ${fonts.teko};
  font-size: ${fontSizes.lg};
  text-transform: uppercase;
  color: ${({ theme }) => theme.onBackground};
  margin-bottom: 1.6rem;
`

export const SectionText = styled.p`
  ${mixins.muli}

  a{
    ${mixins.inlineLink}
  }
  margin: 0.4rem 0;
`

export const EventPeriod = styled(SectionText)`
  font-size: ${ fontSizes.sm};
`

export const EventContainer = styled.div`
  margin: 0.5rem 0 2.5rem 0;
`

interface SectionProps {
  edges: [
    {
      node: {
        frontmatter: {
          endDate: string,
          title: string,
          titleExtension: string,
          subTitle: string,
          location: string,
        }
        html: string
      }
    }
  ]
}
export interface ResumeProps {
  jobs: SectionProps,
  educations: SectionProps,
  extras: SectionProps,
  skills: {
    edges: [
      {
        node: {
          html: string
        }
      }
    ]
  },
}

const Resume: React.FC<ResumeProps> = (data) => {
  const jobToShow = data.jobs.edges.map(({ node }) => node);
  const educationToShow = data.educations.edges.map(({ node }) => node);
  const extrasToShow = data.extras.edges.map(({ node }) => node);

  const [selectedTab, setSelectedTab] = useState(0)

  const orderedTabs: Array<string> = ['jobs', 'educations', 'skills', 'extras']

  return <ResumeContainer id="resume">
    <Tab>
      {orderedTabs.map((tab, index) => <TabItem key={index} selected={selectedTab == index} onClick={() => setSelectedTab(index)}>{tab}</TabItem>)}
    </Tab>

    {/* Render conditionally to trigger animation */}

    {selectedTab === orderedTabs.indexOf('jobs') &&
      <ResumeSection>
        <Section>
          <SectionHeader contentBefore={`"◷"`}>Work Experience</SectionHeader>
          {jobToShow.map((job, index) => {
            const { frontmatter } = job;
            const { title, subTitle, titleExtension } = frontmatter;

            return (<EventContainer key={index}>
              <span>
                <SectionText><b>{title}</b> @ {titleExtension}</SectionText>
              </span>
              <EventPeriod>{subTitle}</EventPeriod>
              <div dangerouslySetInnerHTML={{ __html: job.html }} />
            </EventContainer>)
          })}
        </Section>
      </ResumeSection>
    }

    {selectedTab === orderedTabs.indexOf('educations') && <ResumeSection>
      <Section>
        <SectionHeader contentBefore={`"◶"`}>education</SectionHeader>
        {educationToShow.map((education, index) => {
          const { frontmatter } = education;
          const { title, subTitle } = frontmatter;
          return (
            <EventContainer key={index}>
              <span>
                <SectionText><b>{title}</b> </SectionText>
              </span>
              <EventPeriod>{subTitle}</EventPeriod>
              <div dangerouslySetInnerHTML={{ __html: education.html }} />
            </EventContainer>)
        })}
      </Section>
    </ResumeSection>}

    {selectedTab === orderedTabs.indexOf('skills') && <ResumeSection>
      <Section>
        <SectionHeader contentBefore={`"◵"`}>Skills</SectionHeader>
        <SkillsSection dangerouslySetInnerHTML={{ __html: data.skills.edges[0].node.html }} />
      </Section>
    </ResumeSection>}

    {selectedTab === orderedTabs.indexOf('extras') && <ResumeSection>
      <Section>
        <SectionHeader contentBefore={`"◴"`}>Extra-Curricular</SectionHeader>
        {extrasToShow.map((extra, index) => {
          const { frontmatter } = extra;
          const { title, subTitle, titleExtension } = frontmatter;
          return (<EventContainer key={index}>
            <span>
              <SectionText><b>{title}</b> @ {titleExtension}</SectionText>
              <EventPeriod>{subTitle}</EventPeriod>
            </span>
            <div dangerouslySetInnerHTML={{ __html: extra.html }} />
          </EventContainer>)
        })}
      </Section>
    </ResumeSection>}

  </ResumeContainer>
}

export default Resume
