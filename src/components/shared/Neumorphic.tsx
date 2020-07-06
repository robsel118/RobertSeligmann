import styled from 'styled-components'

interface BaseProps {
  radius?: any
}

const Bordered = styled.div<BaseProps>`
  border-radius: ${props => props.radius || '51px'};
`

export const FlatCard = styled(Bordered)<BaseProps>`
  background: ${props => props.theme.cardBackground};
  box-shadow: ${props => props.theme.cardShadowFlat};
`

interface ButtonProps extends BaseProps {
  pressed?: boolean
}

export const FlatIcon = styled(Bordered)<ButtonProps>`
  background: ${props => props.theme.iconBackground};
  /* border: 1px solid #525252; */
  box-shadow: ${props =>
    props.pressed ? props.theme.iconShadowPressed : props.theme.iconShadowFlat};
  &:hover {
    background: ${props =>
      props.pressed
        ? props.theme.cardBackground
        : props.theme.cardBackgroundHover};
    box-shadow: ${props =>
      props.pressed
        ? props.theme.iconShadowPressed
        : props.theme.iconShadowFlat};
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
