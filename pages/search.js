import axios from "axios";
import React from "react";
import Results from "../components/Results";

const search = ({ moviesFound }) => {
    return (
        <article>
            <form className='flex justify-between items-center m-auto w-80 bg-slate-400 '>
                <div className='border-2 border-red-400'>
                    <input
                        type='search'
                        name='search'
                        id='search'
                        className='h-8 w-full outline-none'
                    />
                </div>
                <div className='border-black border-2 w-full'>
                    <button type='submit'>Search</button>
                </div>
            </form>
            <Results results={moviesFound} />
        </article>
    );
};

export const getServerSideProps = async () => {
    // ! https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
    // ! https://api.themoviedb.org/3/search/movie?api_key=cc971e656b14660d19f5ced178df8863&query=spider-man
    const BaseApiUrl = process.env.BaseApiUrl;
    const apiKey = process.env.apiKey;
    const res = await axios.get(
        `${BaseApiUrl}search/movie?api_key=${apiKey}&query=spider-man`
    );
    const moviesFound = await res.data;
    return { props: { moviesFound } };
};

export default search;
