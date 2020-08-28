import React from 'react'
import styled from 'styled-components'

import Layout from '@components/shared/Layout'
import Content from '@components/shared/Content'
import Header from '@components/Header'
import Footer from '@components/Footer'
import ThemedContext from '../theme/ThemeContext'
import GlobalStyle from '../theme/Global'
import SEO from '@components/shared/seo'
import Sidebar from '@components/shared/Sidebar';
import { fontSizes, fonts } from '@theme/styles';
import Stack from '@components/shared/Stack'


const Error = styled.p`
  font-family: ${fonts.teko};
  font-size: 10rem;
  margin: 0;
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
  line-height: 100%;
`

const Message = styled.p`
  font-family: ${fonts.muli};
  font-size: ${fontSizes.xxl};
  margin: 0;
  color: ${({ theme }) => theme.onBackground};
`

const NotFoundPage = () => (
  <ThemedContext>
  <GlobalStyle />
  <SEO title="About" />
  <Layout>
    <Header />
      <Stack>
          <Error>404</Error>
          <Message>Page Not Found</Message>
      </Stack>
    <Sidebar />
  </Layout>
</ThemedContext>
)

export default NotFoundPage
