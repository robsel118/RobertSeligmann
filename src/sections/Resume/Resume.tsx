import React, { useState } from 'react'
import SectionHeader from '@components/shared/SectionHeader'
import Section from '@components/shared/Section'
import {
  JobHeader,
  JobItem,
  JobDuration,
  JobDescription,
  Glider,
  Tab,
  TabList,
  TabItem,
  JobContainer
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
}

const Resume: React.FC<ResumeProps> = (data) => {
  const jobToShow = data.jobs.edges.map(({ node }) => node);
  const [selectedTab, setSelectedTab] = useState(0)

  return <Section id='work'>
    <SectionHeader>Where I've worked</SectionHeader>
    <JobContainer>
      <Tab>
        <TabList>
          {jobToShow.map((job, index) => <TabItem key={job.frontmatter.titleExtension} onClick={() => setSelectedTab(index)} selected={selectedTab == index}>{job.frontmatter.titleExtension}</TabItem>)}
          <Glider offset={selectedTab} />
        </TabList>
      </Tab>

      <div>
        {jobToShow.map((job, index) => {
          const { frontmatter } = job;
          const { title, subTitle, titleExtension, location } = frontmatter;

          return (selectedTab == index && <JobItem key={index}>
            <span>
              <JobHeader>{title} @ {titleExtension}</JobHeader>
            </span>
            <JobDuration>{subTitle} // {location}</JobDuration>
            <JobDescription dangerouslySetInnerHTML={{ __html: job.html }} />
          </JobItem>)
        })}
      </div>
    </JobContainer>
  </Section>
}

export default Resume
