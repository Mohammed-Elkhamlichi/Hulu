import React from "react";

const HeaderItem = ({ Icon, title }) => {
    return (
        <div className=' py-1 px-2 m-1 cursor-pointer'>
            <Icon className='h-8 mb-2' />
            <p className='group-hover:animate-ping'>{title}</p>
        </div>
    );
};

export default HeaderItem;
