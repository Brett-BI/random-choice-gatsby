import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

import { Author } from "./author";

import { article, articleTitle, articleDate } from './article.module.css';

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
    console.log(author);
    let postDate = new Date(date);
    return (
        <React.Fragment>
            <Author name={ author.name }
                bio={ author.bio.childMdx.body }
                imageUrl={ author.profilePicture.file.url }
                linkedIn={ author.linkedIn }
                github={ author.github }
                fiverr={ author.fiverr } />
            <article className={ article }>
                <div className={ articleDate }>       
                    <div>
                        <div>
                            <span>{ `${days[postDate.getDay()]}, ${months[postDate.getMonth()]} ${postDate.getDate()}, ${postDate.getFullYear()}` }</span>
                            {/* <span>Updated</span> */}
                        </div>
                    </div>
                </div>            
                <span className={ articleTitle }>{ title }</span>                
                <MDXRenderer>
                    { content }                
                </MDXRenderer>
            </article>
        </React.Fragment>
    )
}