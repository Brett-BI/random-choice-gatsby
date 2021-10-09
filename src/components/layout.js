import React from 'react';

import Header from './header';

import { container } from './layout.module.css';

export default function Layout({ children }) {
    return (
        <div className={ container }>
            <Header />
            { children }
        </div>
    )
}