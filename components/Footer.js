import React from "react";
import Link from "next/link";

const Footer = () => {
    const thisYear = new Date().getFullYear();
    const footerDisplay =
        window.scrollY < window.screen.height
            ? "block"
            : "fixed right-0  bottom-0 left-0";
    console.log(window.scrollY);
    return (
        <footer
            className={` ${footerDisplay} group   text-center font-mono text-xl my-5`}
        >
            <p className='group-hover:animate-pulse'>
                Hulu&copy;{thisYear} By{" "}
                <a
                    href='https://mohammed-elkhamlichi.netlify.app'
                    className='tracking-widest'
                >
                    Mohammed-Elkhamlichi
                </a>
            </p>
        </footer>
    );
};

export default Footer;
