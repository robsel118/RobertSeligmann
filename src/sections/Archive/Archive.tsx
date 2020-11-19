import React, { useRef } from 'react'
import { Link } from 'gatsby'
import { MDXRenderer } from "gatsby-plugin-mdx"
import Icon, { IconName } from '@components/shared/Icons'
import Section from '@components/shared/Section'
import SectionHeader from '@components/shared/SectionHeader'
import useOnScreen from '@hooks/useOnScreen';

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

interface ArchiveData {
  frontmatter: {
    icon: IconName;
    iconColor?: string;
    title:string
    tags: [string]
    external? :string
    internal?: string
    github?: string
  }
  body: string
}

export interface ArchiveProps {
  archive: {
    edges: [
      {
        node: ArchiveData
      }
    ]
  }
}

const ArchiveItem = ({ body, frontmatter: { title, icon, iconColor, tags, github, external, internal } }: ArchiveData) => {
  
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;
  const onScreen = useOnScreen(ref, 0.6, true);
  return (<ArchiveCard color={iconColor} ref={ref} isOnScreen={onScreen}>
    <ArchiveHeader>
      <ArchiveHeaderTag color={iconColor}>
        <Icon name={icon} size={30} />
      </ArchiveHeaderTag>
      <LinkWrapper>
        {github && <a href={github} target="_blank" rel='noreferrer'><Icon name={"GitHub"} /></a>}
        {external && <a href={internal} target="_blank" rel='noreferrer'><Icon name={"ExternalLink"} /></a>}
        {internal && <Link to={internal}><Icon name={"Link"} /></Link>}
      </LinkWrapper>
    </ArchiveHeader>
    <div>
      <ArchiveTitle>{title}</ArchiveTitle>
      <MDXRenderer components={{ wrapper: ArchiveDescription }}>{body}</MDXRenderer>
    </div>
    <div> {tags.map((tag, index) => <ArchiveTag key={index}>{tag}</ArchiveTag>)}</div>
  </ArchiveCard>);
}

const Projects: React.FC<ArchiveProps> = ({ archive }) => {
  const itemsToShow = archive.edges.map(({ node }) => node);
  return (<Section id="archive">
    <SectionHeader>Other Projects/Links</SectionHeader>
    <ArchiveGrid>
    {itemsToShow.map((archiveItem, index) => { 

      return <ArchiveItem key={index} frontmatter={archiveItem.frontmatter} body={archiveItem.body}/>
    } )}
    </ArchiveGrid>
  </Section>)
}

export default Projects
