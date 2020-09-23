import styled from 'styled-components'
import mixins from '@theme/mixins'
import media from '@theme/media'
import { hex2rgba } from '@utils/'

export const ArchiveGrid = styled.div`
  ${mixins.grid};
  ${media.laptop`grid-template-columns: repeat(auto-fill, minmax(300px, 33%))`}
`

export const ArchiveCard = styled.div<{ color?: string }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 5rem;
  padding: 1rem;
  z-index: 3;
  background: var(--background-alt);
  border-radius: 8px;
  ${mixins.transitionAll};
  border: 0.5px solid rgba(0, 0, 0, 0.06);
  border-left: 0.5rem solid ${({ color }) => color};
  box-shadow: 1px 4px 6px -1px rgba(0, 0, 0, 0.1),
    1px 2px 4px -1px rgba(0, 0, 0, 0.06);
  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.1);
    transform: translateY(-6px);
  }
`

export const ArchiveHeader = styled.div`
  height: 3rem;
  ${mixins.flexBetween};
`

export const ArchiveHeaderTag = styled.div<{ color?: string }>`
  height: 3rem;
  width: 3rem;
  ${mixins.flexCenter};
  border-radius: 50%;
  background-color: ${({ color }) => hex2rgba(color || '#000000', 0.2)};
  svg {
    stroke: ${({ color }) => hex2rgba(color || '#000000', 0.95)};
  }
`

export const ArchiveTitle = styled.p`
  font-size: var(--fs-h4);
  margin: 1rem 0 2rem 0;
`
export const ArchiveDescription = styled.div`
  p {
    margin-bottom: 1.5rem;
    a {
      ${mixins.inlineLink}
    }
  }
`

export const ArchiveTag = styled.span`
  font-size: var(--fs-sm);
  font-family: var(--ff-mono);
  &:not(:first-child)::before {
    content: ' · ';
  }
`
export const LinkWrapper = styled.div`
  a {
    margin-left: 0.5rem;
  }
`
