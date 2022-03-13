import React from "react";

const Footer = () => {
    const thisYear = new Date().getFullYear();
    return (
        <footer className='group text-center font-mono text-xl my-5'>
            <p className='group-hover:animate-pulse'>
                Hulu&copy;{thisYear} By MohammedElkhamlichi.com
            </p>
        </footer>
    );
};

export default Footer;
