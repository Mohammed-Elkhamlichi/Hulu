import axios from "axios";
import React from "react";
import SearchMovie from "../components/Search";

const Search = ({ moviesFound }) => {
    return (
        <article>
            <div className=''>
                {/* get the moviesFound props from getServerSideProps method
                and pass it to the SearchMovie Component */}
                <SearchMovie moviesFound={moviesFound} />
            </div>
        </article>
    );
};

export const getServerSideProps = async (context) => {
    // ! https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
    // ! https://api.themoviedb.org/3/search/movie?api_key=cc971e656b14660d19f5ced178df8863&query=spider-man
    const search = context.query.search;
    const BaseApiUrl = process.env.BaseApiUrl;
    const apiKey = process.env.apiKey;
    const res = await axios.get(
        `${BaseApiUrl}search/movie?api_key=${apiKey}&query=${search}`
    );
    const moviesFound = await res.data;
    console.log(moviesFound);
    return { props: { moviesFound } };
};

export default Search;
