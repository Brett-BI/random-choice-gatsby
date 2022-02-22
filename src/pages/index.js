import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import { ArticleList } from '../components/articleList';

export default function IndexPage({ data }) {
  const myVar = [1, 2, 3, 4];
  const myElements = myVar.map(n => { <div>{ n }</div> });
  return (
    <Layout>
        { myElements }
        {/* {
          data.allContentfulArticle.nodes.map(node => (
              <article key={ node.id }>
                  <h1><Link to={ `articles/${node.slug}` }>{ node.title }</Link></h1>
              </article>
          ))
        } */}
        <ArticleList articles={data.allContentfulArticle.nodes} />
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