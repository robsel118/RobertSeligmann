import React from 'react'
import styled from 'styled-components'

import Layout from '@components/shared/Layout'
import Header from '@components/Header'
import ThemedContext from '../theme/ThemeContext'
import GlobalStyle from '../theme/Global'
import SEO from '@components/shared/seo'
import Sidebar from '@components/shared/Sidebar';
import Stack from '@components/shared/Stack'


const Error = styled.p`
  font-family: var(--ff-display);
  font-size: 10rem;
  margin: 0;
  color: var(--cl-primary);
  font-weight: 600;
  line-height: 100%;
`

const Message = styled.p`
  font-size: var(--fs-h3);
  margin: 0;
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
