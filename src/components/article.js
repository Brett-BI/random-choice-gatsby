import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

import { article, articleTitle, articleMeta, articleMetaItem, metaItemTitle, metaItemTitleRight, metaItemContent } from './article.module.css';

deckDeckGoHighlightElement();

export default function Article({ title, date, author, content }) {
    return (
        <article className={ article }>
            <span className={ articleTitle }>{ title }</span>
            <div className={ articleMeta }>
                <div className={ articleMetaItem }>                    
                    <span className={ metaItemContent }>{ author.name }</span>
                    <span className={ metaItemTitle }>Author</span>
                </div>
                <div className={ articleMetaItem }>                    
                    <span className={ metaItemContent }>{ date }</span>
                    <span className={ metaItemTitleRight }>Updated</span>
                </div>            
            </div>
            <MDXRenderer>
                { content }                
            </MDXRenderer>
        </article>
    )
}