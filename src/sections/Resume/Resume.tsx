import React, { useState } from 'react'
import {
  ResumeContainer,
  ResumeSection,
  SectionText,
  EventContainer,
  EventPeriod,
  JobSection,
  Glider,
  Tab,
  TabList,
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
  extras: SectionProps,
  
}

const Resume: React.FC<ResumeProps> = (data) => {
  const jobToShow = data.jobs.edges.map(({ node }) => node);
  const extrasToShow = data.extras.edges.map(({ node }) => node);

  const [selectedTab, setSelectedTab] = useState(0)

  const orderedTabs: Array<string> = ['jobs',  'extras']

  return <ResumeContainer id="resume">
    <Tab>
      <TabList>
        {orderedTabs.map((tab, index) => <TabItem key={index} onClick={() => setSelectedTab(index)}>{tab}</TabItem>)}
        <Glider offset={selectedTab}/>
      </TabList>
    </Tab>

    {selectedTab === orderedTabs.indexOf('jobs') &&
      <ResumeSection>
          {jobToShow.map((job, index) => {
            const { frontmatter } = job;
            const { title, subTitle, titleExtension, location } = frontmatter;

            return (<EventContainer key={index}>
              <span>
                <SectionText>{title} @ {titleExtension}</SectionText>
              </span>
              <EventPeriod>{subTitle} // {location}</EventPeriod>
              <JobSection dangerouslySetInnerHTML={{ __html: job.html }} />
            </EventContainer>)
          })}
      </ResumeSection>
    }

    {selectedTab === orderedTabs.indexOf('extras') && <ResumeSection>
        {extrasToShow.map((extra, index) => {
          const { frontmatter } = extra;
          const { title, subTitle, titleExtension } = frontmatter;
          return (<EventContainer key={index}>
            <span>
              <SectionText> {title} @ {titleExtension}</SectionText>
              <EventPeriod>{subTitle}</EventPeriod>
            </span>
            <div dangerouslySetInnerHTML={{ __html: extra.html }} />
          </EventContainer>)
        })}
    </ResumeSection>}

  </ResumeContainer>
}

export default Resume
