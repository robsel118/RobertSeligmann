import React from 'react'
import styled from 'styled-components'
import { Tag, GitHub, Edit3 } from 'react-feather'
import mixins from '@theme/mixins'
import SectionHeader from '@components/shared/SectionHeader'
import { hex2rgba } from '@utils/'

const ArchiveGrid = styled.div`
  ${mixins.grid("repeat(auto-fill, minmax(300px, 25vw))")}

`

const ArchiveCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 5rem;
  padding: 1rem;
  z-index: 3;
  transition: all 0.3s ease-in-out;
  border: 0.5px solid rgba(0, 0, 0, 0.06);
  box-shadow: 1px 4px 6px -1px rgba(0, 0, 0, 0.1), 1px 2px 4px -1px rgba(0, 0, 0, 0.06);
  &:hover{
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
    transform: translateY(-6px);
  }
`

const ArchiveHeader = styled.div`
  display: flex;
  height: 3rem;

  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`

const ArchiveHeaderTag = styled.div<{color?: string}>`

  height: 3rem;
  width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius:50%;
  background-color: ${props => hex2rgba(props.color || '#000000', 0.2)};
  svg {
    stroke:  ${props => hex2rgba(props.color || '#000000', 0.95)};
  }

`

const ArchiveHeaderLink = styled.a`

`

const ArchiveTitle = styled.p`
   ${mixins.muli};
   font-size: 1.5rem;
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
  archive: {
    edges: [
      {
        node :{
          frontmatter: {
            icon: string;
            iconColor?: string;
            title:string
            tags: [string]
            external? :string
            internal?: string
            github?: string
          }
          html: string
        }
      }
    ]
  }
}

const Projects: React.FC<ArchiveProps> = ({ archive }) => {
  const itemsToShow = archive.edges.map(({ node }) => node);

  return (<section id="archive">
    <SectionHeader>Other Projects/Links</SectionHeader>
    <ArchiveGrid>
    {itemsToShow.map((archiveItem, index) => { 
      const { title, icon, iconColor, tags } = archiveItem.frontmatter;
      return <ArchiveCard key={index}>
        <ArchiveHeader>
          <ArchiveHeaderTag color={iconColor}>
            <Edit3 size={30}/>
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
