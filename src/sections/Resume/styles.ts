import { Link } from 'gatsby'
import styled from 'styled-components'
import mediaMin from '@theme/media'
import mixins from '@theme/mixins'
import { SlideLeft, FadeIn } from '@theme/animation'

export const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const Tab = styled.div`
  ${mixins.flexCenter};
  flex-direction: row;
`
export const TabList = styled.ul`
  z-index: 0;
  display: flex;
  padding: 0;
  flex-direction: row;
  border-bottom: 2px solid var(--cl-text-main);
  height: var(--tab-height);
`

export const TabItem = styled.li`
  ${mixins.display};
  ${mixins.flexCenter};
  z-index: 8;
  cursor: pointer;
  color: var(--cl-text-main-dk);
  font-size: var(--fs-h4);
  transition: all 0.3s ease-in-out;
  width: var(--tab-width);
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
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
  ${mediaMin.laptop`max-width: 75%;`}
  margin: 0 auto;
  transition: transform 0.4s ease-in-out;
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
      color: var(--cl-primary);
    }
  }
`

export const SectionText = styled.h1`
  strong {
    color: var(--cl-primary);
  }
  font-size: var(--fs-main);
  a {
    ${mixins.inlineLink}
  }
  font-size: var(--fs-h4);
  font-weight: 400;
  margin: 0.4rem 0;
`

export const EventPeriod = styled(SectionText)`
  font-size: var(--fs-sm);
  line-height: 150%;
`

export const EventContainer = styled.div`
  margin: 0.5rem 0 2.5rem 0;
`

export const Glider = styled.div<{ offset: number }>`
  transition: transform 0.3s ease;
  position: absolute;
  display: flex;
  width: var(--tab-width);
  border-bottom: 2px solid var(--cl-primary);
  background: transparent;
  z-index: 1;
  transform: translateX(${({ offset }) => offset * 100}%);
  height: var(--tab-height);
`
