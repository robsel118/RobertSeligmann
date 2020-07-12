import styled from 'styled-components'
import { breakpoints, fonts } from '../../theme/styles'

export const ProjectImage = styled.div`
  /* background-color: red; */
  z-index: 9;
  grid-column: 1;
  grid-row: 1;
  @media (min-width: ${breakpoints.md}) {
    grid-row: 1/ 8;
    grid-column: 7 / 16;
  }
`

export const ProjectDescription = styled.div`
  background-color: gray;
  grid-column: 1;
  grid-row: 1;
  opacity: 0.6;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  overflow: hidden;
  @media (min-width: ${breakpoints.md}) {
    grid-column: 1 / 9;
    grid-row: 3 / 7;
    opacity: 1;
  }
`

export const DescriptionTitle = styled.p`
  font-family: ${fonts.teko};
  font-size: 1.5rem;
  margin: 1rem 1rem 0.5rem 1rem;
  color: ${props => props.theme.textColor};
  text-transform: uppercase;
  letter-spacing: 1px;
`

export const DescriptionText = styled.p`
  font-family: ${fonts.muli};
  margin: 1rem;

  font-size: 1rem;
  color: ${props => props.theme.textColor};
`

export const DescriptionTechList = styled.div`
  display: flex;
  span {
    font-family: ${fonts.roboto};
    font-size: 1rem;
    margin: 0.5rem 1rem;
    color: ${props => props.theme.textColor};
  }
`
export const DescriptionLinks = styled.div`
  display: flex;
  a {
    margin: 1rem;
  }
`

export const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  min-height: 300px;
  margin: 3rem auto;

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: repeat(16, 1fr);
    grid-template-rows: repeat(8, 1fr);

    &:nth-of-type(even) {
      ${ProjectDescription} {
        grid-column: 8 / 16;

        p {
          text-align: right;
        }
        div {
          justify-content: flex-end;
        }
      }
      ${ProjectImage} {
        grid-column: 1 /10;
      }
    }
  }
`
