import { useRouter } from "next/router";
import React, { useRef, useState, useContext } from "react";
import { huluContext } from "../context/context";
import Results from "./Results";

const SearchMovie = ({ moviesFound }) => {
    const searchValue = useRef();

    const router = useRouter();

    const handleSubmitSeachForm = (e) => {
        e.preventDefault();
        router.push(`/search?search=${searchValue.current.value}`);
    };
    return (
        <>
            <form
                className='flex justify-between items-center m-auto w-96 rounded-full bg-slate-700 mt-5 h-10 border-2 border-slate-600 md:w-3/5 '
                onSubmit={(e) => handleSubmitSeachForm(e)}
            >
                <input
                    ref={searchValue}
                    type='search'
                    name='search'
                    id='search'
                    placeholder='search to your favorite movie'
                    className=' w-full outline-none px-3 py-2 font-mono text-sm text-gray-300 bg-slate-800 rounded-full'
                />
                <input type='submit' value='' className='hidden' />
            </form>
            {moviesFound && <Results results={moviesFound} />}
        </>
    );
};

export default SearchMovie;
