import React from "react";

const HeaderItem = ({ Icon, title }) => {
    return (
        <div className='selection:group flex flex-col py-1 px-2 m-1 cursor-pointer items-center sm:w-20 md:w-28 '>
            <Icon className='h-8 mb-1 animate-pulse' />
            <p className='opacity-100 tracking-tighter'>{title}</p>
        </div>
    );
};

export default HeaderItem;
