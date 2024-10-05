import React from "react";


//create your first component
const DecenaDeMil = ({ seconds }) => {
    // extraigo decenas de mil
    const decenaDeMIl = Math.floor(seconds / 10000) % 10;

    return (
        <div className="text-center">
            <h1 style= {{fontSize: '150px'}}>{decenaDeMIl}</h1>
        </div>
    );
};

export default DecenaDeMil;