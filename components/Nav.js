import React, { useContext, useState, useEffect } from "react";
import requests from "../utils/requests";
import { useRouter } from "next/router";
import { huluContext } from "../context/context";
import axios from "axios";

const Nav = () => {
    const [genres, setGenres] = useState([]);
    const router = useRouter();

    // fetch movies genres
    const BaseApiUrl = process.env.BaseApiUrl;
    const apiKey = process.env.apiKey;
    const genresBaseUrl = `${BaseApiUrl}/genre/movie/list?api_key=${apiKey}&language=en-US}`;
    // ! use Axios
    useEffect(() => {
        axios
            .get(genresBaseUrl)
            .then((res) => {
                setGenres(res.data.genres);
                console.log(genres);
            })
            .catch((error) => console.log(error));
    }, [apiKey, BaseApiUrl]);

    return (
        <nav className='relative'>
            <div className='flex flex-row space-x-3 px-10 sm:px-20 sm:space-x-4 my-4 text-xl   items-center overflow-x-scroll scrollbar-hide'>
                {genres.map((genre) => {
                    const { id, name } = genre;
                    return (
                        <div
                            onClick={() => {
                                router.push(`/?genre=${id}`);
                            }}
                            key={id}
                            className='transition duration-100-100 px-2 transform  whitespace-nowrap last:pr-20 hover:scale-125 hover:text-white  active:text-red-600 cursor-pointer '
                        >
                            {name}
                        </div>
                    );
                })}
            </div>
            <div className=' rounded-tl-2xl rounded-bl-2xl px-4 absolute right-0 top-0  h-14  bg-gradient-to-l from-slate-800'></div>
        </nav>
    );
};

export default React.memo(Nav);
