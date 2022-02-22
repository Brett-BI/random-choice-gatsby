import React from 'react';
import { Link } from 'gatsby';

import pbc_logo_small from "../images/pbc_logo_cropped.png";
import {
    header,
    nav,
    brand, 
    brandLogo,
    randomArticle,
    navLink
} from './header.module.css';

export default function Header() {
    // make the random article anchor a combo-button like item on the header. so...
    // | {logo}   <---> | randomArticle|
    return (
        <header className={ header }>
            <nav className={ nav }>
                <ul>
                    <li className={ brand }><Link className={ brandLogo } to="/"><img src={pbc_logo_small} /></Link></li>
                    <li className={ randomArticle }><Link className={ navLink } to="/random-article">Random Article</Link></li>
                </ul>
            </nav>
        </header>
    )
}
