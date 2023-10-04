import './reset.css'

import { StaticQuery, graphql } from 'gatsby'

import Footer from './footer'
import Header from './header'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import React from 'react'
import favicon from '../images/favicon.ico'
import styled, { ThemeProvider } from 'styled-components'
import theme from './../lib/theme'

const LayoutWrapper = styled.div`
  background: #b1b0e5;
  display: flex;
  flex-direction: column;
  font-family: 'IBM Plex Mono', 'monospace';
  min-height: 100vh;
`

const MainContent = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={(data) => (
      <LayoutWrapper>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
          ]}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
          ]}
        >
          <meta
            name="google-site-verification"
            content="oNthUkbBshKqAkf2gJBfacZcMPjRSio0GFzeETEvNuc"
          />
        </Helmet>
        <ThemeProvider theme={theme}>
          <Header
            menuLinks={data.site.siteMetadata.menuLinks}
            siteTitle={data.site.siteMetadata.title}
          />
          <MainContent>{children}</MainContent>
          <Footer />
        </ThemeProvider>
      </LayoutWrapper>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
