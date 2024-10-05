import React from "react";


//create your first component
const Centenas = ({ seconds }) => {
    // extraigo centenas de mil
    const centenas = Math.floor(seconds / 100) % 10;

    return (
        <div className="text-center">
            <h1  style= {{fontSize: '150px'}}>{centenas}</h1>
        </div>
    );
};

export default Centenas;