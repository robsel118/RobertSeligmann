import React from 'react'
import styled from 'styled-components'
import { fonts } from '../../theme/styles'
import { FlatBorder } from './Neumorphic'
import vueSVG from '../../images/tech/Logo_Vue.svg'
import d3SVG from '../../images/tech/Logo_D3.svg'
import lodashSVG from '../../images/tech/Logo_Lodash.svg'
import reactSVG from '../../images/tech/Logo_React.svg'
import androidSVG from '../../images/tech/Logo_Android.svg'
import firebaseSVG from '../../images/tech/Logo_Firebase.svg'

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TechStackImage = styled.img`
  margin: 0 0.5rem 0 1rem;
  height: 2rem;
  width: 2rem;
`

const TechStackText = styled.p`
  
  margin-left: 1rem;
  font-family: ${fonts.muli};
  color: ${props => props.theme.textColor};
  font-size: 1.2rem;
`

const TechStackContainer = styled(FlatBorder)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items:center;
  width: 180px;
  margin: 1.5rem 0;
  border-radius: 15px;
`
export const VueStack = () => {
  return <TechStackContainer>
    <TechStackImage src={vueSVG}/>
    <TechStackText>Vue.js</TechStackText>
  </TechStackContainer>
}

export const D3Stack = () => {
  return <TechStackContainer>
    <TechStackImage src={d3SVG}/>
    <TechStackText>D3.js</TechStackText>
  </TechStackContainer>
}

export const LodashStack = () => {
  return <TechStackContainer>
    <TechStackImage src={lodashSVG}/>
    <TechStackText>Lodash</TechStackText>
  </TechStackContainer>
}
export const ReactStack = () => {
  return <TechStackContainer>
    <TechStackImage src={reactSVG}/>
    <TechStackText>React.js</TechStackText>
  </TechStackContainer>
}
export const AndroidStack = () => {
  return <TechStackContainer>
    <TechStackImage src={androidSVG}/>
    <TechStackText>Android</TechStackText>
  </TechStackContainer>
}
export const FirebaseStack = () => {
  return <TechStackContainer>
    <TechStackImage src={firebaseSVG}/>
    <TechStackText>Firebase</TechStackText>
  </TechStackContainer>
}

export default Stack
