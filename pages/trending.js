import React from "react";
import axios from "axios";
import Results from "../components/Results";

const Trending = ({ trendingMovies }) => {
    return (
        <>
            <Results results={trendingMovies} />
        </>
    );
};

// server side rendering
export const getServerSideProps = async (context) => {
    // !trending movies api url:
    // ! https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
    const BaseApiUrl = process.env.BaseApiUrl;
    const apiKey = process.env.apiKey;
    const res = await axios.get(
        `${BaseApiUrl}trending/all/day?api_key=${apiKey}`
    );
    const trendingMovies = await res.data;
    return { props: { trendingMovies } };
};
export default Trending;
