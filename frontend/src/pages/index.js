import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';

const IndexPage = () => {
    return (
        <div>
            <HomePage />
            <AboutPage />
            <ContactPage />
        </div>
    );
};

export default IndexPage;