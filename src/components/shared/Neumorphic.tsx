import styled from 'styled-components'

interface BaseProps {
  radius?: any
}

const Bordered = styled.div<BaseProps>`
  border-radius: ${props => props.radius || '51px'};
`

export const FlatBorder = styled(Bordered)<BaseProps>`
  background: ${props => props.theme.cardBackground};
  box-shadow: ${props => props.theme.cardShadowFlat};
`

export const FlatCard = styled(FlatBorder)<BaseProps>`
  width: 100%;
  max-width: 300px;
  padding: 0 0.8rem;
`

interface ButtonProps extends BaseProps {
  pressed?: boolean
}

export const FlatIcon = styled(Bordered)<ButtonProps>`
  background: ${props => props.theme.cardBackground};
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
