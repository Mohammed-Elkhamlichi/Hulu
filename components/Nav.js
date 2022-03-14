import { useContext } from "react";
import requests from "../utils/requests";
import { useRouter } from "next/router";
import { huluContext } from "../context/context";

const Nav = () => {
    const router = useRouter();
    // the Context Api
    const [state, dispatch] = useContext(huluContext);
    console.log(state.geners);
    console.log("context api from Nav: ", useContext(huluContext));
    return (
        <nav className='relative'>
            <div className='flex flex-row space-x-3 px-10 sm:px-20 sm:space-x-4 my-4 text-xl   items-center overflow-x-scroll scrollbar-hide'>
                {Object.entries(requests).map(([key, { id, title, url }]) => {
                    return (
                        <div
                            onClick={() => {
                                router.push(`/?genre=${key}`);
                            }}
                            key={key}
                            className='transition duration-100-100 px-2 transform  whitespace-nowrap last:pr-20 hover:scale-125 hover:text-white  active:text-red-600 cursor-pointer '
                        >
                            {title}
                        </div>
                    );
                })}
            </div>
            <div className=' rounded-tl-2xl rounded-bl-2xl px-6 absolute right-0 top-0  h-14  bg-gradient-to-l from-slate-800'></div>
        </nav>
    );
};

export default Nav;
