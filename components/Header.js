import React from "react";
import HeaderItem from "./HeaderItem";
import {
    BadgeCheckIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from "@heroicons/react/outline";

const Header = () => {
    return (
        <header className='flex flex-row items-center justify-between shadow-lg shadow-slate-850'>
            <div className='flex flex-row'>
                <HeaderItem Icon={HomeIcon} title='Home' />
                <HeaderItem Icon={BadgeCheckIcon} title='Check' />
                <HeaderItem Icon={LightningBoltIcon} title='Light' />
                <HeaderItem Icon={SearchIcon} title='Search' />
                <HeaderItem Icon={UserIcon} title='User' />
            </div>
            <p className='font-bold text-lg px-3'>hulu</p>
        </header>
    );
};

export default Header;
