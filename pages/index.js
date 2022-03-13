import Image from "next/image";
import Results from "../components/Results";
import requests from "../utils/requests";

const Home = ({ results }) => {
    console.log({ "The index page Result : ": results });
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
    console.log({
        url: `https://api.themoviedb.org/3/${
            requests[genre]?.url || requests.fetchTrending.url
        }`,
    });
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
        },
    };
};

export default Home;
