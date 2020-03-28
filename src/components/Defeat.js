import React from "react";
import "./Defeat.css"


const Defeat = (props) =>{
    return(
        <div className="defeat">
            <div className="text">
            <h1>{props.lost} lost</h1>
        <p>Refresh to play again</p>
            </div>
        
        </div>
    )
}

export default Defeat