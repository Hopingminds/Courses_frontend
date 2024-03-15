import React from "react";
import "./ratingsBar.css"

function RatingsBar(){
    return(
        <>
        <div className="ratings-container">
            <div className="ratings-bar">
                <div className="ratings-fill-1"> </div> 
            </div>
            <div className="ratings-bar">
                <div className="ratings-fill-2"> </div>
            </div>
            <div className="ratings-bar">
                <div className="ratings-fill-3"> </div>
            </div>
            <div className="ratings-bar">
                <div className="ratings-fill-4"> </div>
            </div>
            <div className="ratings-bar">
                <div className="ratings-fill-5"> </div>
            </div>
        </div>
        <div className="ratings-fill">

        </div>

        </>
    )
}
export default RatingsBar;