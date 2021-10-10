import React from 'react';
import { Link } from 'gatsby';

import {
    header,
    nav,
    brand, 
    randomArticle,
    navLink
} from './header.module.css';

export default function Header() {
    return (
        <header className={ header }>
            <nav className={ nav }>
                <ul>
                    <li className={ brand }><Link className={ navLink } to="/">RC</Link></li>
                    <li className={ randomArticle }><Link className={ navLink } to="/random-article">Random Article</Link></li>
                </ul>
            </nav>
        </header>
    )
}
