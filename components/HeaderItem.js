import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const HeaderItem = ({ Icon, title }) => {
    const router = useRouter();
    return (
        /*
         this Component compose from the header elements like the Home, Account, Search ....;
         and i use Next Router to push the user to the page he clicked on it;
        and i use toLocaleLowerCase() to make the string lower case.
         */

        <div
            className='group  flex flex-col  py-1 px-1 mb-0 mt-4 mr-1 cursor-pointer items-center  w-12 sm:w-16 md:w-20'
            onClick={() =>
                router.push(
                    `/${
                        title.toLocaleLowerCase() === "home"
                            ? (title = "")
                            : title.toLocaleLowerCase()
                    }`
                )
            }
        >
            <Icon className='h-8  group-hover:animate-bounce ' />
            <p className='opacity-0 group-hover:opacity-100  hover:text-white tracking-wide ease-in-out'>
                {title}
            </p>
        </div>
    );
};

export default HeaderItem;
