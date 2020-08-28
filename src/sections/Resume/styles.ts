import { Link } from 'gatsby'
import styled from 'styled-components'
import { fonts, fontSizes } from '@theme/styles'
import mixins from '@theme/mixins'
import { SlideLeft, FadeIn } from '@theme/animation'

export const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const Tab = styled.div`
  margin: 1rem auto;
  justify-content: center;
  align-items: center;
  height: 3rem;
`

export const TabItem = styled(Link).attrs({
  to: '/about#resume',
})<{ selected: boolean }>`
  ${mixins.teko};
  font-size: ${fontSizes.lg};
  margin: 0 1rem;
  box-shadow: ${({ selected }) =>
      selected ? 'inset 0 -0.8rem' : 'inset 0 -0.2rem'}
    ${({ theme }) => theme.primary};

  transition: all 0.3s ease-in-out;
  &:hover {
    padding-bottom: 0.2em;
  }
`
export const ResumeSection = styled.section`
  min-height: calc(90vmin - 80px);
  animation: ${SlideLeft} 0.4s ease-in-out forwards,
    ${FadeIn} 0.4s ease-in-out forwards;
  opacity: 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  transition: transform 0.4s ease-in-out;
`
export const SkillsSection = styled.div`
  h1 {
    ${mixins.muli};
    font-size: ${fontSizes.lg};
  }
  ul {
    ${mixins.grid()}
    width: 100%;
    padding: 0;
    margin: 2rem 0;
    grid-row-gap: 1rem;
    list-style-type: none;
    li {
      display: grid;
      grid-template-columns: auto 1fr 1fr;
      ${mixins.roboto}
      letter-spacing: 0.03rem;

      code {
        ${mixins.roboto}
        font-weight: 300;
      }

      &::before {
        content: '○';
        position: relative;
        left: 0;
        margin-right: 5px;
        color: ${({ theme }) => theme.primary};
      }
    }
  }
`
export const JobSection = styled.div`
  ul {
    padding: 0;
    margin: 0;
    list-style: outside none none;
  }

  li {
    position: relative;
    padding-left: 1rem;
    margin: 0.4rem 0;
    line-height: 120%;
    &::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: ${({ theme }) => theme.primary};
    }
  }
`

export const Section = styled.div`
  width: 100%;
`
export const SectionTitle = styled.p`
  font-family: ${fonts.teko};
  font-size: ${fontSizes.lg};
  text-transform: uppercase;
  color: ${({ theme }) => theme.onBackground};
  margin-bottom: 1.6rem;
`

export const SectionText = styled.p`
${mixins.muli}

font-size: ${fontSizes.lg};

a{
  ${mixins.inlineLink}
}
margin: 0.4rem 0;
`

export const EventPeriod = styled(SectionText)`
  font-size: ${fontSizes.md};
  line-height: 150%;
`

export const EventContainer = styled.div`
  margin: 0.5rem 0 2.5rem 0;
`
