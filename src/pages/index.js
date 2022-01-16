import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';

export default function IndexPage({ data }) {
  return (
    <Layout>
      <div className="container">
        {
          data.allContentfulArticle.nodes.map(node => (
              <article key={ node.id }>
                  <h1><Link to={ `articles/${node.slug}` }>{ node.title }</Link></h1>
              </article>
          ))
        }
      </div>
    </Layout>
  )
};

export const allPosts = graphql`
    query {
        allContentfulArticle {
            nodes {
                title
                subtitle
                summary {
                  childMdx {
                    body
                  }
                }
                slug
                id
            }
        }
    }
`