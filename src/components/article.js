import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { article } from './article.module.css';

export default function Article({ title, date, content }) {
    return (
        <article className={ article }>
            <h2>{ title }</h2>
            <p>Updated: { date }</p>
            <MDXRenderer>
                { content }
            </MDXRenderer>
        </article>
    )
}