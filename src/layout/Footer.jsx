import React from 'react';

const Footer = () => {
    return (
        <div className="container mx-auto bg-purple-300">
            <p className='items-center p-2.5'>© {new Date().getFullYear()} Copyright Text</p>
        </div>
    );
};

export default Footer;
