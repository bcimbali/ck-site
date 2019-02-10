import { Link, StaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import React from 'react';
import SEO from '../components/seo';

const PORTFOLIO_QUERY = graphql`
  query PortfolioQuery {
    allMarkdownRemark {
      edges {
        node {
          html
          excerpt
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />
    <h1>Portfolio</h1>
    <StaticQuery
      query={PORTFOLIO_QUERY}
      render={({allMarkdownRemark}) => (
        allMarkdownRemark.edges.map(({node}) => (
          <div key={node.frontmatter.slug}>
            <Link to={`/portfolio-items${node.frontmatter.slug}`}>
              <h2>{node.frontmatter.title}</h2>
            </Link>
            <p>{node.frontmatter.date}</p>
            <p>{node.rawMarkdownBody}</p>
            <Link class="read-more" to={`/portfolio-items${node.frontmatter.slug}`}>Read More</Link>
          </div>
        ))
      )}
    >
    </StaticQuery>
  </Layout>
)

export default Portfolio