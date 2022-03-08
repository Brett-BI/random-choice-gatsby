import React from 'react';
import { Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

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

export function Author({ name, bio, imageUrl, linkedIn, github, fiverr }) {
    return (
        <div className={ authorContainer }>
            <div className={ authorFace }>
                <img src={ imageUrl } />
            </div>
            <p className={ authorName }>{name}</p>            
            <div className={ authorBio }><MDXRenderer>{bio}</MDXRenderer></div>
            <div className={ authorSocialsContainer }>
                <ul className={ authorSocials }>
                    <li><a className={ authorSocialLI }>{linkedIn}</a></li>
                    <li><a className={ authorSocialGH }>{github}</a></li>
                    <li><a className={ authorSocial5r }>{fiverr}</a></li>
                </ul>
            </div>
        </div>
    )
}