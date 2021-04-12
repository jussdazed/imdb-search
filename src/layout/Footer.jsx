import React from 'react';

const Footer = () => {
    return (
        <div className="min-w-full mx-auto bg-purple-300">
            <p className='items-center p-2.5 mx-10'>© {new Date().getFullYear()} Copyright Text</p>
        </div>
    );
};

export default Footer;
