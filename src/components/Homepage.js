import React from "react";

import { Link } from "react-router-dom";
function HomePage()
{
    return(
        <div className="ab" >
            <h1 align="center">MOVIE DETAILS</h1>
            <Link to="/MovieDetails">
            <button class="button button1">GET DETAILS</button>
            </Link>
            <Link to="/MoviePost">
            <button class="button button2">CREATE DETAILS</button>
            </Link>
            <Link to="/UpdateMovie">
            <button class="button button3">UPDATE DETAILS</button>
            </Link>
            <Link to="/MovieDel">
            <button class="button button4">DELETE DETAILS</button>
            </Link>
          
        </div>
    )
}
export default HomePage;