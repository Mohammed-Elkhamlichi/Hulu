import React from "react";
import HeaderItem from "./HeaderItem";
import Image from "next/image";
import {
    BadgeCheckIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from "@heroicons/react/outline";
import Nav from "./Nav";

const Header = () => {
    return (
        <header className='flex  flex-col sm:flex-row  items-center justify-between shadow-lg shadow-slate-850'>
            <div className='flex flex-grow h-auto flex-row mx-w-2xl justify-start'>
                <HeaderItem Icon={HomeIcon} title='Home' />
                <HeaderItem Icon={BadgeCheckIcon} title='Check' />
                <HeaderItem Icon={LightningBoltIcon} title='Light' />
                <HeaderItem Icon={SearchIcon} title='Search' />
                <HeaderItem Icon={UserIcon} title='User' />
            </div>
            {/* <p className='font-mono h-auto text-2xl px-3'>hulu</p> */}
            <div className='relative w-32 h-20'>
                <Image
                    src='/hulu-logo-4.png'
                    layout='fill'
                    className=' object-cover opacity-100 scale-150'
                    alt='hulu image'
                />
            </div>
            <Nav />
        </header>
    );
};

export default Header;
