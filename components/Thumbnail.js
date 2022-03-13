import Image from "next/image";
import React from "react";
import { ThumbUpIcon, StarIcon } from "@heroicons/react/solid";

const Thumbnail = ({ movie }) => {
    const BASE_URL = "https://image.tmdb.org/t/p/original/";
    return (
        <div
            className='flex group  flex-col bg-slate-700 w-96  m-2 sm:my-5 sm:mx-4 rounded-lg md:hover:shadow-slate-500 md:hover:shadow-sm cursor-pointer transition-all duration-50 transform md:hover:scale-105 md:hover:z-50'
            key={movie.id}
        >
            <div
                className={`relative w-auto h-64 rounded-lg after:content-['${movie.media_type}'] after:hover:content-["watch_now"] after:absolute after:bg-slate-700 after:tracking-widest after:text-gray-300 after:text-lg after:animate-pulse after:hover:text-yellow-500 after:px-3 after:py-1 after:rounded-tl-lg after:opacity-50`}
            >
                <Image
                    src={`${BASE_URL}${
                        movie.poster_path || movie.backdrop_path
                    }`}
                    layout='fill'
                    // width={1080}
                    // height={1080}
                    alt='Movie Image'
                    className='rounded-tr-lg rounded-tl-lg object-fill'
                />
            </div>
            <div className='flex flex-col  '>
                <h3 className='p-2 text-xl md:group-hover:font-bold md:group-hover:text-2xl) transition-all duration-100 ease-in-out '>
                    {movie.original_title || movie.title}
                </h3>
                <p className='p-2 text-sm font-light tracking-widest'>
                    {movie.overview.slice(0, 80)}...
                </p>

                <div className='flex items-center lg:opacity-0 lg:group-hover:opacity-100 space-x-2 p-2 justify-between'>
                    <div> {movie.release_date || "YY-MM-DD"}</div>{" "}
                    <div className='flex items-center'>
                        {movie.vote_average || 6.7}
                        <StarIcon className='h-8 p-1 text-yellow-300' />
                    </div>
                    <div className='flex items-center '>
                        {movie.vote_count || 100}{" "}
                        <ThumbUpIcon className='h-8 p-2 text-blue-500' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Thumbnail;
