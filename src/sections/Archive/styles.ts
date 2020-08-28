import styled from 'styled-components'
import { fontSizes } from '@theme/styles'
import mixins from '@theme/mixins'
import { hex2rgba } from '@utils/'

export const ArchiveGrid = styled.div`
  ${mixins.grid('repeat(auto-fill, minmax(300px, 1fr))')}
`

export const ArchiveCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 5rem;
  padding: 1rem;
  z-index: 3;
  background: ${({ theme }) => theme.surface};
  ${mixins.transitionAll};
  border: 0.5px solid rgba(0, 0, 0, 0.06);
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
  ${mixins.muli};
  font-size: ${fontSizes.xl};
  margin: 1rem 0 2rem 0;
`
export const ArchiveDescription = styled.div`
  p {
    ${mixins.muli}
    margin-bottom: 1.5rem;
    a {
      ${mixins.inlineLink}
    }
  }
`

export const ArchiveTag = styled.span`
  ${mixins.roboto}
  &:not(:first-child)::before {
    content: ' · ';
  }
`
export const LinkWrapper = styled.div`
  a {
    margin-left: 0.5rem;
  }
`
