import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Icon, { IconName } from '@components/shared/Icons'
import { fontSizes } from '@theme/styles'
import mixins from '@theme/mixins'
import SectionHeader from '@components/shared/SectionHeader'
import { hex2rgba } from '@utils/'

const ArchiveGrid = styled.div`
  ${mixins.grid("repeat(auto-fill, minmax(300px, 1fr))")}
`

const ArchiveCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 5rem;
  padding: 1rem;
  z-index: 3;
background: ${({theme})=> theme.surface};
  ${mixins.transitionAll};
  border: 0.5px solid rgba(0, 0, 0, 0.06);
  box-shadow: 1px 4px 6px -1px rgba(0, 0, 0, 0.1), 1px 2px 4px -1px rgba(0, 0, 0, 0.06);
  &:hover{
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
    transform: translateY(-6px);
  }
`

const ArchiveHeader = styled.div`
  height: 3rem;
  ${mixins.flexBetween};
  margin-bottom: 1rem;
`

const ArchiveHeaderTag = styled.div<{color?: string}>`
  height: 3rem;
  width: 3rem;
  ${mixins.flexCenter};
  border-radius:50%;
  background-color: ${({color}) => hex2rgba(color || '#000000', 0.2)};
  svg {
    stroke:  ${({color}) => hex2rgba(color || '#000000', 0.95)};
  }

`


const ArchiveTitle = styled.p`
   ${mixins.muli};
   font-size: ${fontSizes.xl};
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
const LinkWrapper = styled.div`
  a{
    margin-left: 0.5rem;
  }
`


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

  return (<section id="archive">
    <SectionHeader>Other Projects/Links</SectionHeader>
    <ArchiveGrid>
    {itemsToShow.map((archiveItem, index) => { 
      const { title, icon, iconColor, tags, github, external, internal } = archiveItem.frontmatter;
      return <ArchiveCard key={index} data-sal="slide-up"  data-sal-duration="300" data-sal-delay={(index % 3) *150} data-sal-easing="ease-out" >
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
    } )}
    </ArchiveGrid>
  </section>)
}

export default Projects
