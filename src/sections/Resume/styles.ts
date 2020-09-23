import styled from 'styled-components'
import media from '@theme/media'
import mixins from '@theme/mixins'
import { SlideLeft, FadeIn } from '@theme/animation'

export const JobContainer = styled.div`
  ${mixins.grid};
  ${media.tablet`grid-template-columns: 25% 60%;`};
  min-height: 300px;
`

export const Tab = styled.div`
  ${mixins.flexCenter};
  width: 100%;
`
export const TabList = styled.ul`
  z-index: 0;
  display: flex;
  padding: 0;
  flex-direction: row;
  border-bottom: 1px solid var(--cl-text-main);
  border-left: none;
  ${media.tablet`
    flex-direction: column;
    border-bottom: none;
    border-left: 1px solid var(--cl-text-main);

  `};
  list-style: outside none none;
`

export const TabItem = styled.li<{ selected: boolean }>`
  ${mixins.flexCenter};
  z-index: 8;
  padding: 0;

  cursor: pointer;
  color: ${({ selected }) =>
    selected ? 'var(--cl-primary)' : 'var(--cl-text-alt)'};
  font-size: var(--fs-caption);
  transition: all 0.3s ease-in-out;
  height: var(--min-press-size);
  width: 100%;
  min-width: var(--tab-width);
  &:hover {
    background-color: var(--background-alt);
  }
`

export const Glider = styled.div<{ offset: number }>`
  transition: transform 0.3s ease;
  position: absolute;
  display: flex;
  height: var(min-press-size);
  border-bottom: 2px solid var(--cl-primary);
  background: transparent;
  z-index: 8;
  padding: 0;
  width: var(--tab-width);
  border-left: none;
  height: var(--tab-height);

  transform: translateX(${({ offset }) => offset * 100}%);
  ${media.tablet`
    transform: translateY(${({ offset }) => offset * 100}%);
    border-left: 2px solid var(--cl-primary);
    border-bottom: none;
    width: 2px;
`};
`

export const JobItem = styled.div`
  margin: 0.5rem 0 2.5rem 0;
  transition: transform 0.4s ease-in-out;
  animation: ${SlideLeft} 0.4s ease-in-out forwards,
    ${FadeIn} 0.4s ease-in-out forwards;
  opacity: 0;
`

export const JobHeader = styled.h1`
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

export const JobDuration = styled.p`
  font-size: var(--fs-sm);
  line-height: 150%;
`

export const JobDescription = styled.div`
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
