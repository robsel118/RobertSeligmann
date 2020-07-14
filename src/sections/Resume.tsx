import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import SectionHeader from '@components/shared/SectionHeader'
import { fonts } from '@theme/styles'
import mixins from '@theme/mixins'
import scroll from 'gatsby-plugin-scroll-reveal'


const ResumeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr ;
  grid-template-rows: auto;

`

const Tab = styled.div`
  margin: 1rem auto;
  justify-content: center;
  align-items: center;
  height: 3rem;
`

const TabItem = styled(Link).attrs({
  to: '/about#resume'
})<{selected: boolean}>`
  ${mixins.teko};
  font-size: 1.2rem;
  margin: 0 1rem;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  box-shadow: ${props => props.selected? 'inset 0 -0.8rem': 'inset 0 -0.2rem'} ${props => props.theme.highlight};
  
  &:hover{
    padding-bottom: 0.2em;
  }
`
const ResumeSection = styled.section<{ selected: boolean }>`
  transition: all 1s ease;
  display: ${props => props.selected ? 'flex' : 'none'};
  opacity: ${props => props.selected ? '1' : '0'};
  visibility: ${props => (props.selected ? 'visible' : 'hidden')};
  transition: all 1s ease-in-out;
  min-height: calc(100vmin - 80px);
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

`

export const Section = styled.div`
  max-width: 700px;
  width: 100%
`
export const SectionTitle = styled.p`
  font-family: ${fonts.teko};
  text-transform: uppercase;
  font-size: 1.2rem;
  color: ${props => props.theme.linkColor};
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
  font-size: 0.8rem;
`

export const EventContainer = styled.div`
  margin: 0.5rem 0 2.5rem 0;
`


export interface ResumeProps {
  jobs: {
    edges: [
      {
        node: {
          frontmatter: {
            endDate: string,
            position: string,
            company: string,
            range: string,
            ocation: string,
          }
          html: string
        }
      }
    ]
  },
  educations: {
    edges: [
      {
        node: {
          frontmatter: {
            endData: string,
            school: string,
            range: string,
            location: string,
          }
          html: string
        }
      }
    ]
  },
  extras: {
    edges: [
      {
        node: {
          frontmatter: {
            date: string,
            name: string,
            role: string,
            mention: string,
          }
          html: string
        }
      }
    ]
  }
}

const Resume: React.FC<ResumeProps> = (data) => {
  const jobToShow = data.jobs.edges.map(({ node }) => node);
  const educationToShow = data.educations.edges.map(({ node }) => node);
  const extrasToShow = data.extras.edges.map(({ node }) => node);
  
  const [selectedTab, setSelectedTab] = useState(0)
  const tabs = ['jobs', 'educations', 'extra-curriculars']

  useEffect(() => {

  }, [])
  
  return <ResumeContainer id="resume">
    <Tab>
      {tabs.map((tab, index) => <TabItem key={index} selected={selectedTab == index} onClick={()=>setSelectedTab(index)}>{tab}</TabItem>) }
    </Tab>
    <ResumeSection id="jobs" selected={selectedTab === tabs.indexOf('jobs')}>
      <Section>
        <SectionHeader contentBefore={`"▹"`}>Work Experience</SectionHeader>
        {jobToShow.map((job, index) => {
          const { frontmatter } = job;
          const { position, company, range } = frontmatter;
          return (<EventContainer key={index}>
            <span>
              <SectionText><b>{position}</b> @ {company}</SectionText>
            </span>
            <EventPeriod>{range}</EventPeriod>
            <div dangerouslySetInnerHTML={{__html: job.html}}/>
          </EventContainer>)
        })}
     </Section>
    </ResumeSection>
    <ResumeSection id="extras" selected={selectedTab === tabs.indexOf('extra-curriculars')}>
    <Section>
      <SectionHeader contentBefore={`"▹"`}>Extra-Curricular</SectionHeader>
        {extrasToShow.map((extra, index) => {
          const { frontmatter } = extra;
          const {  name, role, mention } = frontmatter;
          return (<EventContainer key={index}>
            <span>
              <SectionText><b>{role}</b> @ {name}</SectionText>
              <EventPeriod>{mention}</EventPeriod>
            </span>
            <div dangerouslySetInnerHTML={{__html: extra.html}}/>
          </EventContainer>)
        })}
     </Section>
    </ResumeSection>
    <ResumeSection id="education" selected={selectedTab === tabs.indexOf('educations')}>
    <Section>
      <SectionHeader contentBefore={`"▹"`}>education</SectionHeader>
        {educationToShow.map((education, index) => {
          const { frontmatter } = education;
          const {  school, range } = frontmatter;
          return (<EventContainer key={index}>
            <span>
              <SectionText><b>{school}</b> </SectionText>
            </span>
            <EventPeriod>{range}</EventPeriod>
            <div dangerouslySetInnerHTML={{__html: education.html}}/>
          </EventContainer>)
        })}
     </Section>
    </ResumeSection>
  </ResumeContainer>
}

export default Resume
