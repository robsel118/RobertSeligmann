import React from 'react'
import styled from 'styled-components';
import { graphql, PageProps } from "gatsby";
import Hero, { HeroTitle, HeroSubTitle } from '../components/shared/Hero'
import { Title, Paragraph } from '../components/shared/Typography'
import Grid from '../components/shared/Grid'
import Image from '../components/shared/Image'
import Stack, { VueStack, D3Stack, LodashStack } from '../components/shared/Stack'
import Layout from '../components/shared/Layout'
import ThemedContext from '../ThemeContext'
import SEO from '../components/shared/seo'
import { Header, Footer } from '../components/Navbar'


import '../styles.css'

type DataProps = {
  matsumoto: {
    fluid: any
  },
  fuji: {
    resize :{
      src: string
    }
  },
  ideathon: {
    fluid: any
  }
}

const TextContent = styled.div`
  max-width: 50rem;
  margin: 5rem 0;
`


const FST: React.FC<PageProps<DataProps>>  = ({ data }) => {
  return (
    <ThemedContext>
      <Layout>
        <SEO title="Fujitsu Software Technology" />
        <Header />
        <Hero image={data.fuji.resize.src}>
            <HeroTitle>Working in Matsumoto, Japan</HeroTitle>
            <HeroSubTitle>Summer internship in the Land of the Rising Sun</HeroSubTitle>
        </Hero>
        <TextContent>
          <Title>Working at Fujitsu Software Technologies</Title>
          <Paragraph>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paragraph>
        </TextContent>
        <Grid cols={2}>
          <Stack>
            <VueStack/>
            <D3Stack/>
            <LodashStack/>
          </Stack>
          <TextContent>
            <Title>Challenges</Title>
            <Paragraph>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paragraph>
          </TextContent>  
        </Grid>
        <Grid cols={2}>
          <Image title="Matsumoto Castle" fluid={data.matsumoto.fluid}/>
          <Image title="FST Ideathon" fluid={data.ideathon.fluid}/>
        </Grid>
        <TextContent>
          <Title>Summary</Title>
          <Paragraph>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paragraph>
        </TextContent>
        <Footer/>
      </Layout>
    </ThemedContext>
  )
}

export const query = graphql`
  {
    matsumoto: imageSharp(fluid: { originalName: { regex: "/matsumoto-castle/" } }) {
      fluid(maxWidth: 900, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    },
    fuji: imageSharp(fluid: { originalName: { regex: "/fuji/" } }) {
      resize(width: 1200, quality: 100) {
        src
      }
    },
    ideathon: imageSharp(fluid: { originalName: { regex: "/fst_ideathon/" } }) {
      fluid(maxWidth: 900, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
export default FST
