import styled from 'styled-components'
import { Link } from 'gatsby'
import mixins from '@theme/mixins'
import { fontSizes } from '@theme/styles'
import Image from '@components/shared/Image'

export const FeaturedSection = styled.section.attrs({ id: 'featured' })`
  min-height: 100vh;
`

export const ProjectList = styled.div`
  ${mixins.grid('1fr')};
  grid-column-gap: 5rem;
`

export const Card = styled.div`
  width: 100%;
  min-height: 500px;
  margin: 2rem 0;

  ${Image} {
    transition: scale 0.5s ease-in-out;
    height: 250px;

    img {
      scale: 110%;
      transition: all 0.5s ease-in-out !important;
    }
    &:hover {
      scale: 110%;

      img {
        transform: translateY(0.5rem);
      }
    }
  }
`
export const CardText = styled.p`
  ${mixins.teko};
`

export const CardDescription = styled.p`
  ${mixins.muli};
  a {
    ${mixins.inlineLink};
  }
`

export const BannerLinks = styled.div`
  display: flex;
  align-items: center;
  a {
    display: flex;
  }
`

export const BorderedButton = styled(Link)`
  ${mixins.teko};
  display: flex;
  font-size: ${fontSizes.xl};
  text-decoration: none;
  margin-right: 2rem;
  align-items: center;

  polyline:first-child {
    transform: translateX(-7px);
    transition: transform 0.2s ease-in-out;
  }

  &:hover {
    polyline:first-child {
      transform: translateX(0);
    }
  }
`

export const SkillList = styled.div`
  display: block;
  margin: 2rem 0;
`

export const Skill = styled.span`
  ${mixins.roboto}

  &:not(:first-child)::before {
    content: '  ·  ';
  }
`
