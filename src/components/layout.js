import React from 'react';

import Header from './header';

import { container } from './layout.module.css';

export default function Layout({ children }) {
    return (
        <main className={ container }>
            <Header />
            { children }
        </main>
    )
}