import React from 'react';
import { Link } from 'gatsby';

import face_place from "../images/pbc_logo_cropped.png";
import { 
    authorBio, 
    authorContainer, 
    authorFace, 
    authorName,
    authorSocialsContainer,
    authorSocials,
    authorSocialLI,
    authorSocialGH,
    authorSocial5r
} from "./author.module.css";

export function Author() {
    return (
        <div className={ authorContainer }>
            <div className={ authorFace }>
                <img src={ face_place } />
            </div>
            <p className={ authorName }>BRETT BURLEY-INNERS</p>            
            <p className={ authorBio }>About me... stuff about me. The author. THAT guy. 
            The one who wrote this stuff. Content. This shouldn't be a book but let's see how it
            looks when a bunch of crap is in here. Keep going. Needs. More. Content.</p>
            <div className={ authorSocialsContainer }>
                <ul className={ authorSocials }>
                    <li><a classname={ authorSocialLI }>LinkedIn.com</a></li>
                    <li><a classname={ authorSocialGH }>GitHub.com</a></li>
                    <li><a classname={ authorSocial5r }>Fiverr.com</a></li>
                </ul>
            </div>
        </div>
    )
}