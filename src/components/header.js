import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import {
    header,
    nav,
    brand, 
    randomArticle,
    navLink
} from './header.module.css';

export default function Header() {
    const data = useStaticQuery(graphql`
        query {
            allContentfulArticle {
                nodes {
                    slug
                }
            }
        }
    `).allContentfulArticle.nodes.map((node) => (node.slug));
    return (
        <header className={ header }>
            <nav className={ nav }>
                <ul>
                    <li className={ brand }><Link className={ navLink } to="/">RC</Link></li>
                    <li className={ randomArticle }><Link className={ navLink } to="/random-article" state={{ slugs: data }}>Random Article</Link></li>
                </ul>
            </nav>
        </header>
    )
}
