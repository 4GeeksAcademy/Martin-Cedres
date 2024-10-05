import React from "react";


//create your first component
const UnidadDeMil = ({ seconds }) => {
    // extraigo unidades de mil
    const unidadDeMil = Math.floor(seconds / 1000) % 10;

    return (
        <div className="text-center">
            <h1 style= {{fontSize: '150px'}}>{unidadDeMil}</h1>
        </div>
    );
};

export default UnidadDeMil;