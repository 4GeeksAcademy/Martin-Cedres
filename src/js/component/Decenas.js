import React from "react";


//create your first component
const Decenas = ({ seconds }) => {
    // extraigo decenas de mil
    const decenas = Math.floor(seconds / 10) % 10;

    return (
        <div className="text-center">
            <h1 style= {{fontSize: '150px'}}>{decenas}</h1>
        </div>
    );
};

export default Decenas;