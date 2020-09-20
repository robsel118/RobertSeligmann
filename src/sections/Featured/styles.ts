import styled from 'styled-components'
import { Link } from 'gatsby'
import mixins from '@theme/mixins'
import mediaMin from '@theme/media'
import Image from '@components/shared/Image'

export const FeaturedSection = styled.section.attrs({ id: 'featured' })`
  min-height: 100vh;
`

export const ProjectList = styled.div`
  ${mixins.grid};
  ${mediaMin.laptop`grid-template-columns: repeat(2, 1fr);`}
`

export const Card = styled.div`
  width: 100%;
  min-height: 300px;
  margin: 2rem 0;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  ${Image} {
    transition: scale 0.5s ease-in-out;
    height: 100%;

    img {
      /* scale: 110%;
      transition: all 0.5s ease-in-out !important; */
    }
    &:hover {
      scale: 110%;

      img {
        transform: translateY(0.5rem);
      }
    }
  }
`

export const FeaturedHeader = styled.h1`
  font-family: var(--ff-mono);
  color: var(--cl-primary);
  font-size: var(--fs-sm);
  max-width: 70%;
  font-weight: 600;
`

export const CardContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 8;
  border-radius: 8px;
  padding: 1rem;
  background: linear-gradient(
    90deg,
    rgba(63, 63, 63, 0.67) 0%,
    rgba(63, 63, 63, 0.22) 88.54%
  );
  background-position: 25% 0%;
  &:hover {
  }
  p,
  a,
  h2,
  div,
  span {
    color: #ffffff;
    margin: 0 0 1rem 0;
  }
`

export const CardText = styled.h2`
  font-size: var(--fs-h4);
`

export const CardDescription = styled.p`
  font-size: var(--fs-sm);
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
  display: flex;
  text-decoration: none;
  margin-right: 2rem;
  align-items: center;
  polyline {
    stroke: #ffffff;
  }
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
`

export const Skill = styled.span`
  font-size: var(--fs-sm);
  font-family: var(--ff-mono);

  &:not(:first-child)::before {
    content: '  ·  ';
  }
`
