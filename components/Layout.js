import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Script from "next/script";

const Layout = ({ children }) => {
    return (
        <>
            {/* The Head */}
            <Head>
                <title>Hulu Clone</title>
                <meta
                    name='description'
                    content='Hulu Clone, this WebSite Is A clone of the Real one Hulu.com'
                />
                <link rel='icon' href='/hulu.png' />
            </Head>
            <Script src='https://cdn.tailwindcss.com'></Script>

            {/* The Header */}
            <Header />

            {/* The Body */}
            {children}

            {/* The Footer */}
            <Footer />
        </>
    );
};

export default Layout;
