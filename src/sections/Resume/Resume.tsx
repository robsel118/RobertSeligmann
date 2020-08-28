import React, { useState } from 'react'
import SectionHeader from '@components/shared/SectionHeader'
import {
  ResumeContainer,
  ResumeSection,
  SectionText,
  EventContainer,
  EventPeriod,
  JobSection,
  SkillsSection,
  Tab,
  TabItem
} from './styles'

interface SectionProps {
  edges: [
    {
      node: {
        frontmatter: {
          endDate: string
          title: string
          titleExtension: string
          subTitle: string
          location: string
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
          <SectionHeader contentBefore={`"◷"`}>Work Experience</SectionHeader>
          {jobToShow.map((job, index) => {
            const { frontmatter } = job;
            const { title, subTitle, titleExtension, location } = frontmatter;

            return (<EventContainer key={index}>
              <span>
                <SectionText><b>{title}</b> @ {titleExtension}</SectionText>
              </span>
              <EventPeriod>{subTitle} // {location}</EventPeriod>
              <JobSection dangerouslySetInnerHTML={{ __html: job.html }} />
            </EventContainer>)
          })}
      </ResumeSection>
    }

    {selectedTab === orderedTabs.indexOf('educations') && <ResumeSection>
        <SectionHeader contentBefore={`"◶"`}>education</SectionHeader>
        {educationToShow.map((education, index) => {
          const { frontmatter } = education;
          const { title, subTitle, location } = frontmatter;
          return (
            <EventContainer key={index}>
              <span>
                <SectionText><b>{title}</b> </SectionText>
              </span>
              <EventPeriod>{subTitle} // {location}</EventPeriod>
              <div dangerouslySetInnerHTML={{ __html: education.html }} />
            </EventContainer>)
        })}
    </ResumeSection>}

    {selectedTab === orderedTabs.indexOf('skills') && <ResumeSection>
        <SectionHeader contentBefore={`"◵"`}>Skills</SectionHeader>
        <SkillsSection dangerouslySetInnerHTML={{ __html: data.skills.edges[0].node.html }} />
    </ResumeSection>}

    {selectedTab === orderedTabs.indexOf('extras') && <ResumeSection>
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
    </ResumeSection>}

  </ResumeContainer>
}

export default Resume
