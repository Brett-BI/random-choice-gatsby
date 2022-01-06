import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

import { article, articleTitle, articleMeta, articleMetaItem, metaItemTitle, metaItemTitleRight, metaItemContent } from './article.module.css';

deckDeckGoHighlightElement();

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

const days = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
]

export default function Article({ title, date, author, content }) {
    let postDate = new Date(date);
    return (
        <article className={ article }>
            <span className={ articleTitle }>{ title }</span>
            <div className={ articleMeta }>
                <div className={ articleMetaItem }>                    
                    <span className={ metaItemContent }>{ author.name }</span>
                    <span className={ metaItemTitle }>Author</span>
                </div>
                <div className={ articleMetaItem }>                    
                    <span className={ metaItemContent }>{ `${days[postDate.getDay()]}, ${months[postDate.getMonth()]} ${postDate.getDate()}, ${postDate.getFullYear()}` }</span>
                    <span className={ metaItemTitleRight }>Updated</span>
                </div>            
            </div>
            <MDXRenderer>
                { content }                
            </MDXRenderer>
        </article>
    )
}