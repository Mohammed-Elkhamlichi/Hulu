import axios from "axios";
import React from "react";
import Results from "../components/Results";

const search = ({ moviesFound }) => {
    return (
        <article>
            <form className='flex justify-between items-center m-auto w-4/5 rounded-full bg-slate-700 mt-5 h-10 border-2 border-slate-600'>
                <input
                    type='search'
                    name='search'
                    id='search'
                    placeholder='search to your favorite movie'
                    className=' w-full outline-none px-3 py-2 font-mono text-sm text-gray-300 bg-slate-800 rounded-full'
                />
            </form>
            {moviesFound ? (
                <Results results={moviesFound} />
            ) : (
                <h1>Movie Not Fount Please Try an Other Keywords</h1>
            )}
        </article>
    );
};

export const getServerSideProps = async (context) => {
    // ! https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
    // ! https://api.themoviedb.org/3/search/movie?api_key=cc971e656b14660d19f5ced178df8863&query=spider-man
    let search = context.query.search;
    // if (!search) {
    //     search = " ";
    //     return search;
    // }
    const BaseApiUrl = process.env.BaseApiUrl;
    const apiKey = process.env.apiKey;
    const res = await axios.get(
        `${BaseApiUrl}search/movie?api_key=${apiKey}&query=${search}`
    );

    const moviesFound = await res.data;
    return { props: { moviesFound } };
};

export default search;
