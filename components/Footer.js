import React from "react";

const Footer = () => {
    const thisYear = new Date().getFullYear();
    return (
        <footer className='group fixed right-0 left-0 bottom-0 text-center font-mono text-xl mb-3'>
            <p className='group-hover:animate-pulse'>Hulu&copy;{thisYear}</p>
        </footer>
    );
};

export default Footer;
