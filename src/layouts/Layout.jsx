import React from 'react';
import Header from '../components/Header';

function Layout({children}) {
    return (
        <div className="page">
            <Header />
            <main>{children}</main>
        </div>
    )
}

export default Layout;