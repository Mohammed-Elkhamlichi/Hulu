import { useRouter } from "next/router";
import React, { useRef, useState, useContext } from "react";
import { huluContext } from "../context/context";
import Results from "./Results";

const SearchMovie = ({ moviesFound }) => {
    const searchValue = useRef();

    const [alert, setAlert] = useState(null);

    const router = useRouter();

    const handleSubmitSeachForm = (e) => {
        e.preventDefault();
        setAlert({
            message: "Movie Not Fount Please Try an Other Keywords",
            display: "flex",
        });
        router.push(`/search?query=${searchValue.current.value}`);
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
            </form>
            {moviesFound ? (
                <Results results={moviesFound} />
            ) : (
                <h1
                    className={`hidden rounded justify-between items-center m-auto w-96  bg-slate-900 mt-5 h-14 border-1 px-5 border-slate-600 md:w-3/5 ${
                        alert && alert.display
                    }`}
                >
                    {alert && alert.message}
                </h1>
            )}
        </>
    );
};

export default SearchMovie;
