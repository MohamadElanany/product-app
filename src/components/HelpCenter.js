import React, { useState } from 'react';
import FAQ from './FAQ';
import ContactUs from './ContactUs';


const HelpCenter = () => {
    const [activeTab, setActiveTab] = useState('faq');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="help-center">
        <article>
            <h1>Help Center</h1>
            <p>Welcome to our Help Center. Please use the tabs below to find information and contact us.</p>
        </article>
        
        <div className="tabs">
            <button
            onClick={() => handleTabChange('faq')}
            className={activeTab === 'faq' ? 'active' : ''}
            >
            FAQ
            </button>
            <button
            onClick={() => handleTabChange('contact')}
            className={activeTab === 'contact' ? 'active' : ''}
            >
            Contact Us
            </button>
        </div>
        
        <div className="tab-content">
            {activeTab === 'faq' && <FAQ />}
            {activeTab === 'contact' && <ContactUs />}
        </div>
        </div>
    );
};

export default HelpCenter;
