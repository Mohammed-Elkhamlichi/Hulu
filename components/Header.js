import React from "react";
import HeaderItem from "./HeaderItem";
import Image from "next/image";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className='flex flex-col  shadow-lg shadow-slate-850'>
      <div className='flex flex-col sm:flex-row items-center justify-between'>
        <div className='flex flex-grow h-auto mx-w-2xl justify-evenly '>
          <HeaderItem Icon={HomeIcon} title='HOME' />
          <HeaderItem Icon={BadgeCheckIcon} title='TRENDING' />
          <HeaderItem Icon={LightningBoltIcon} title='VERIFIED' />
          <HeaderItem Icon={CollectionIcon} title='COLLECTIONS' />
          <HeaderItem Icon={SearchIcon} title='SEARCH' />
          <HeaderItem Icon={UserIcon} title='ACCOUNT' />
        </div>
        <div className='relative w-32 h-20'>
          <Image
            src='/hulu-logo-4.png'
            layout='fill'
            className='object-cover opacity-100 scale-150'
            alt='hulu image'
          />
        </div>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
