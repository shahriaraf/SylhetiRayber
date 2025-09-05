import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <main>
                {/* The children prop will render the specific page component */}
                {children}
            </main>
        </div>
    );
};

export default Layout;