import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import SectionHeader from '@components/shared/SectionHeader'
import { fonts, fontSizes } from '@theme/styles'
import mixins from '@theme/mixins'


const ResumeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr ;
  grid-template-rows: auto;
  width: 100%;

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
  ${mixins.transitionAll};
  font-size: ${fontSizes.lg};
  margin: 0 1rem;
  box-shadow: ${props => props.selected? 'inset 0 -0.8rem': 'inset 0 -0.2rem'} ${props => props.theme.primary};
  
  &:hover{
    padding-bottom: 0.2em;
  }
`
const ResumeSection = styled.section<{ selected: boolean }>`
  opacity: ${({selected}) => selected ? '1' : '0'};
  visibility: ${({selected}) => selected ? 'visible' : 'hidden'};
  transform: ${({selected}) => selected ? 'none': 'translateX(20%)'};
  min-height: ${({selected}) => selected? 'calc(100vmin - 80px)': "0"};
  max-height: ${({selected}) => selected? '100%': "0"};
  flex-direction: column;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  transition: transform 0.3s ease-in-out;

`
const SkillsSection = styled.div`
  h1 {
    ${mixins.muli}
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
      grid-template-columns:  auto 60% 40%;
      ${mixins.roboto}
      code {
        ${mixins.roboto}

      }
      &::before{
        content: "○";
        position: relative;
        left: 0;
        margin-right: 5px;
        color: ${({theme}) => theme.primary };
      }
    }
  }

`
export const Section = styled.div`
  max-width: 700px;
  width: 100%
`
export const SectionTitle = styled.p`
  font-family: ${fonts.teko};
  font-size: ${fontSizes.lg};
  text-transform: uppercase;
  color: ${({theme}) => theme.onBackground};
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
  font-size: ${ fontSizes.sm };
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
  },
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

  const orderedTabs = ['jobs', 'educations', 'skills', 'other']

  
  return <ResumeContainer id="resume">
    <Tab>
      {orderedTabs.map((tab, index) => <TabItem key={index} selected={selectedTab == index} onClick={()=>setSelectedTab(index)}>{tab}</TabItem>) }
    </Tab>
    <ResumeSection selected={selectedTab === orderedTabs.indexOf('jobs')}>
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
    <ResumeSection  selected={selectedTab === orderedTabs.indexOf('other')}>
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
    <ResumeSection selected={selectedTab === orderedTabs.indexOf('educations')}>
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
    <ResumeSection selected={selectedTab === orderedTabs.indexOf('skills')}>
    <Section>
      <SectionHeader contentBefore={`"▹"`}>Skills</SectionHeader>
        <SkillsSection dangerouslySetInnerHTML={{__html: data.skills.edges[0].node.html}}/>
     </Section>
    </ResumeSection>
  </ResumeContainer>
}

export default Resume
