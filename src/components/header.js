import React from 'react';
import { Link } from 'gatsby';

import {
    header,
    nav,
    randomArticle,
    podcast,
    navLink
} from './header.module.css';

export default function Header() {
    return (
        <header className={ header }>
            <nav className={ nav }>
                <ul>
                    <li className={ randomArticle }><Link className={ navLink } to="/random-article">Random Article</Link></li>
                    <li className={ podcast }><Link className={ navLink } to="/podcast">Podcast</Link></li>
                </ul>
            </nav>
        </header>
    )
}
