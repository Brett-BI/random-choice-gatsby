import React from 'react';
import { graphql, Link } from 'gatsby';

export default function Posts({ data }) {
    return (
        <div>
            <h1>These are the posts.</h1>
            {
                data.allContentfulArticle.nodes.map(node => (
                    <article key={ node.id }>
                        <h2><Link to={ `${node.slug}` }>{ node.title }</Link></h2>
                    </article>
                ))
            }
        </div>
    )
};

export const allPosts = graphql`
    query {
        allContentfulArticle {
            nodes {
                title
                slug
                id
            }
        }
    }
`