import React from 'react'
import { Link } from 'gatsby'
import Icon, { IconName } from '@components/shared/Icons'
import Section from '@components/shared/Section'
import SectionHeader from '@components/shared/SectionHeader'
import {
  ArchiveCard,
  ArchiveDescription,
  ArchiveGrid,
  ArchiveHeader,
  ArchiveHeaderTag,
  ArchiveTag,
  ArchiveTitle,
  LinkWrapper
} from './styles'

export interface ArchiveProps {
  archive: {
    edges: [
      {
        node :{
          frontmatter: {
            icon: IconName;
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

  return (<Section id="archive">
    <SectionHeader>Other Projects/Links</SectionHeader>
    <ArchiveGrid>
    {itemsToShow.map((archiveItem, index) => { 
      const { title, icon, iconColor, tags, github, external, internal } = archiveItem.frontmatter;
      return <div style={{display: 'flex'}} key={index} data-sal="slide-up"  data-sal-duration="300" data-sal-delay={(index % 3) *150 }  data-sal-easing="ease-out">
         <ArchiveCard color={iconColor}>
        <ArchiveHeader>
          <ArchiveHeaderTag color={iconColor}>
            <Icon name={icon} size={30}/>
          </ArchiveHeaderTag>
          <LinkWrapper>
            { github && <a href={github} target="_blank" rel='noreferrer'><Icon name={"GitHub"} /></a>}
            { external && <a href={internal} target="_blank" rel='noreferrer'><Icon name={"ExternalLink"} /></a>}
            { internal && <Link to={internal}><Icon name={"Link"} /></Link>}
          </LinkWrapper>
        </ArchiveHeader>
        <div>
          <ArchiveTitle>{title}</ArchiveTitle>
          <ArchiveDescription dangerouslySetInnerHTML={{__html: archiveItem.html}}></ArchiveDescription>
        </div>
         <div> {tags.map((tag, index) => <ArchiveTag key={index}>{tag}</ArchiveTag>)}</div>
      </ArchiveCard>
      </div>
    } )}
    </ArchiveGrid>
  </Section>)
}

export default Projects
