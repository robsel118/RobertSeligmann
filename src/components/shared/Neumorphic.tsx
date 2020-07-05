import styled from 'styled-components'

interface CardProps {
  radius?: any
}
const Bordered = styled.div<CardProps>`
  border-radius: ${props => props.radius || '51px'};
`

export const FlatCard = styled(Bordered)<CardProps>`
  background: ${props => props.theme.cardBackground};
  box-shadow: ${props => props.theme.cardShadowFlat};
`
interface ButtonProps extends CardProps {
  pressed?: boolean
}

export const FlatIcon = styled(Bordered)<ButtonProps>`
  background: ${props => props.theme.iconBackground};
  box-shadow: ${props =>
    props.pressed ? props.theme.iconShadowPressed : props.theme.iconShadowFlat};
  &:hover {
    background: ${props =>
      props.pressed
        ? props.theme.cardBackground
        : props.theme.cardBackgroundHover};
    box-shadow: ${props =>
      props.pressed
        ? props.theme.cardShadowPressed
        : props.theme.cardShadowFlat};
  }
`

export const FlatButton = styled(FlatCard)<ButtonProps>`
  background: ${props => props.theme.cardBackground};
  box-shadow: ${props =>
    props.pressed ? props.theme.cardShadowPressed : props.theme.cardShadowFlat};
  &:hover {
    background: ${props =>
      props.pressed
        ? props.theme.cardBackground
        : props.theme.cardBackgroundHover};
    box-shadow: ${props =>
      props.pressed
        ? props.theme.cardShadowPressed
        : props.theme.cardShadowFlat};
  }
`
