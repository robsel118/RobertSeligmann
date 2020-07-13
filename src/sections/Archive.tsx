import React from 'react'
import styled from 'styled-components'
import { Tag, GitHub } from 'react-feather'
import mixins from '@theme/mixins'
import SectionHeader from '@components/shared/SectionHeader'

const ArchiveGrid = styled.div`
  ${mixins.grid("repeat(auto-fill, minmax(300px, 25vw))")}

`

const ArchiveCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 5rem;
  background: grey;
  padding: 1rem;
`

const ArchiveHeader = styled.div`
  display: flex;
  height: 3rem;

  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`

const ArchiveHeaderTag = styled.div`
  float: left;
  display: flex;
  align-items: center;
  svg {
    stroke: green;
  }
  span{
    ${mixins.muli};
    margin-left: 0.5rem;
    font-size: 1.3rem;
  }
`

const ArchiveHeaderLink = styled.a`
  float: right;
`

const ArchiveTitle = styled.p`
   ${mixins.teko};
`
const ArchiveDescription = styled.div`
   p{
    ${mixins.muli}
    a{
      ${mixins.inlineLink}
    }
  }
`

const ArchiveTag = styled.span`
  ${mixins.roboto}
  &:not(:first-child)::before{
    content: " · "
  }
`

export interface ArchiveProps {
  archive: [{
    node :{
      frontmatter: {
        type: string;
        title:string
        tags: [string]
        external? :string
        internal?: string
        github?: string
      }
      html: string
    }
  }]
}

const Projects: React.FC<ArchiveProps> = ({ archive }) => {
  const itemsToShow = archive.map(({ node }) => node);

  return (<section id="archive">
    <SectionHeader>Other Projects/Links</SectionHeader>
    <ArchiveGrid>
    {itemsToShow.map((archiveItem, index) => { 
      const { title, type, tags } = archiveItem.frontmatter;
      return <ArchiveCard key={index}>
        <ArchiveHeader>
          <ArchiveHeaderTag>
            <Tag />
            <span>{type}</span>
          </ArchiveHeaderTag>
          <ArchiveHeaderLink><GitHub/></ArchiveHeaderLink>
        </ArchiveHeader>
        <div>
          <ArchiveTitle>{title}</ArchiveTitle>
          <ArchiveDescription dangerouslySetInnerHTML={{__html: archiveItem.html}}></ArchiveDescription>
        </div>
         <div> {tags.map((tag, index) => <ArchiveTag key={index}>{tag}</ArchiveTag>)}</div>
      </ArchiveCard>
    } )}
    </ArchiveGrid>
  </section>)
}

export default Projects
