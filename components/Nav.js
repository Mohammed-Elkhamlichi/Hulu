import React from "react";
import requests from "../utils/requests";

const Nav = () => {
    console.log({ requests });
    return (
        <nav>
            <div>
                {Object.entries(requests).map(([key, { id, title, url }]) => {
                    return <p key={key}>{title}</p>;
                })}
            </div>
        </nav>
    );
};

export default Nav;
