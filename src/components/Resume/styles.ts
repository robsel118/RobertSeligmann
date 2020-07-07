import styled from 'styled-components'
import { breakpoints, fonts } from '../../theme/styles'

export const ResumeContainer = styled.div`
  max-width: 960px;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 4rem;
  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: 1fr 2fr;
  }
`

interface ColumnProps {
  order: number
}

export const Section = styled.div`
  border-top: 1px solid ${props => props.theme.linkColor};
  margin: 1rem 1rem 3rem 1rem;
  padding-top: 1.5rem;
`
export const SectionTitle = styled.p`
  font-family: ${fonts.teko};
  text-transform: uppercase;
  font-size: 1.2rem;
  color: ${props => props.theme.linkColor};
  margin-bottom: 1.6rem;
`

export const SectionText = styled.p`
  font-family: ${fonts.muli};
  font-size: 1rem;
  color: ${props => props.theme.linkColor};
  margin: 0.4rem 0;
`

export const EventPeriod = styled(SectionText)`
  font-size: 0.8rem;
`

export const EventContainer = styled.div`
  margin: 0.5rem 0 2.5rem 0;
`

export const Column = styled.div<ColumnProps>`
  @media (max-width: ${breakpoints.md}) {
    padding: 1rem 1rem;
    order: ${props => props.order};
  }
`

export const DownloadLink = styled.a`
  font-family: ${fonts.muli};
  text-decoration: none;
  font-size: 1rem;
  font-weight: 400px;
  letter-spacing: 0.03rem;
  color: ${props => props.theme.linkColor};
  border-bottom: 2px solid ${props => props.theme.linkColor};
  &:hover {
    color: ${props => props.theme.linkColorHover};
    border-bottom: 2px solid ${props => props.theme.linkColorHover};
    padding-bottom: 0.5rem;
  }
`
