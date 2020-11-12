import styled from 'styled-components'
import { Link } from 'gatsby'
import mixins from '@theme/mixins'
import media from '@theme/media'
import Image from '@components/shared/Image'
import Section from '@components/shared/Section'

export const FeaturedSection = styled(Section).attrs({ id: 'featured' })`
  counter-reset: section;
`

export const ProjectList = styled.div`
  ${mixins.grid};
  ${media.laptop`grid-template-columns: repeat(1, 1fr);`}
`

export const Card = styled.div`
  width: 100%;
  min-height: 300px;
  margin: 2rem 0;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  ${mixins.grid};
  ${media.tablet`
    grid-template-columns: repeat(2, 1fr);
    /* Alternate image order */
    &:nth-child(odd) {
      text-align: right;
      a {
        order: 2;
      }
      ${Image} {
        &:hover {
          img {
            transform: scale(1.2);
          }
        }
      }
    }
    `}

  ${Image} {
    transition: scale 0.5s ease-in-out;
    height: 100%;
    border-radius: 8px;
    img {
      transition: all 0.5s ease-in-out !important;
    }
    &:hover {
      img {
        transform: scale(1.2);
      }
    }
  }
`

export const CardContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-position: 25% 0%;

  p,
  div,
  a,
  h2,
  div,
  span {
    width: 100%;
  }
`

export const FeaturedHeader = styled.h1`
  font-family: var(--ff-mono);
  color: var(--cl-primary);
  font-size: var(--fs-sm);
  font-weight: 600;
  margin: 0;
  &::after {
    position: relative;

    counter-increment: section;
    content: ' / 0' counter(section);
    margin-right: 0.5rem;
  }
`

export const CardText = styled.h2`
  font-size: var(--fs-xl);
  margin-bottom: 1rem;
`

export const CardDescription = styled.p`
  font-size: var(--fs-base);
  a {
    ${mixins.inlineLink};
  }
`

export const List = styled.div`
  display: block;
  margin: 0.5rem 0;

  a:not(:first-child)::before {
    content: ' ';
    display: inline-block;
    width: 1rem;
  }

`

export const Skill = styled.span`
  font-size: var(--fs-sm);
  font-family: var(--ff-mono);

  &:not(:first-child)::before {
    content: '  ·  ';
  }
`

