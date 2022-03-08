import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/layout'
import Article from '../../components/article';

export default function BlogPost({ data }) {
    return (
        <Layout>
            <Article title={data.contentfulArticle.title} 
                date={data.contentfulArticle.updatedAt} 
                author={data.contentfulArticle.author} 
                content={data.contentfulArticle.body.childMdx.body} />
        </Layout>
    )
};

export const BlogQuery = graphql`
    query ($id: String) {
        contentfulArticle(id: {eq: $id}) {
            slug
            id
            title
            author {
                bio {
                    childMdx {
                        body
                    }
                }
                id
                name
                email
                profilePicture {
                    file {
                        url
                    }
                }
                linkedIn
                github
                fiverr
            }
            updatedAt
            body {
                childMdx {
                    body
                }
            }
        }
    }
`