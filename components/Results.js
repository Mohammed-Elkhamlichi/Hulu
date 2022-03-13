import React from "react";
import Image from "next/image";
import Thumbnail from "./Thumbnail";

const Results = ({ results }) => {
    const res = results.results;
    console.log({ movies: res });
    return (
        <div className='flex flex-row  flex-wrap items-center content-start justify-center mt-5'>
            {res.map((movie) => {
                return <Thumbnail key={movie.key} movie={movie} />;
            })}
        </div>
    );
};

export default Results;
