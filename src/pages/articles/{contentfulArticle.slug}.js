import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/layout'
import Article from '../../components/article';

export default function BlogPost({ data }) {
    return (
        <Layout>
            <Article title={data.contentfulArticle.title} date={data.contentfulArticle.updatedAt} content={data.contentfulArticle.body.childMdx.body} />
        </Layout>
    )
};

export const BlogQuery = graphql`
    query ($id: String) {
        contentfulArticle(id: {eq: $id}) {
            slug
            id
            title
            updatedAt
            body {
                childMdx {
                    body
                }
            }
        }
    }
`