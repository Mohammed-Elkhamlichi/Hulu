import { useReducer, useContext } from "react";
import { huluContext } from "../context/context";
import Image from "next/image";
import Results from "../components/Results";
import requests from "../utils/requests";

const Home = ({ results, genersfetched }) => {
    // ! reuse the context api
    const [state, dispatch] = useContext(huluContext);

    // ! fetch the movies
    console.log({ "The index page Result : ": results });

    // ! fethc the movies geners
    console.log("genersfetched : " , genersfetched );

    dispatch({ type: "GET_MOVIES_GENERS", genersfetched });

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

    // !get all movies geners
    // https://api.themoviedb.org/3/genre/movie/list?api_key=cc971e656b14660d19f5ced178df8863&language=en-US
    const genersBaseUrl = `${BaseApiUrl}/genre/movie/list?api_key=${apiKey}&language=en-US}`;
    const resGeners = await fetch(genersBaseUrl);
    const genersfetched = await resGeners.json();

    // ! get all movies by the genere of the each movie
    const res = await fetch(
        `https://api.themoviedb.org/3/${
            requests[genre]?.url || requests.fetchTrending.url
        }`
    );
    const data = await res.json();
    const results = data;
    return {
        props: {
            results,
            genersfetched,
        },
    };
};

export default Home;
