import { useReducer, useContext } from "react";
import { huluContext } from "../context/context";
import Image from "next/image";
import Results from "../components/Results";
import requests from "../utils/requests";

const Home = ({ results }) => {
    // ! fetch the movies
    return (
        <div className=''>
            <main className=''>
                <Results results={results} />
            </main>
        </div>
    );
};

export const getServerSideProps = async (context) => {
    const genre = context.query.genre;
    const BaseApiUrl = process.env.BaseApiUrl;
    const apiKey = process.env.apiKey;

    // ! get all movies by the genere of the each movie
    // ! https://api.themoviedb.org/3/discover/movie?api_key=cc971e656b14660d19f5ced178df8863&language=en-US&with_genres=28
    const res = await fetch(
        `${BaseApiUrl}discover/movie?api_key=${apiKey}&with_genres=${genre}`
    );
    const data = await res.json();
    const results = data;
    return {
        props: {
            results,
        },
    };
};

export default Home;
