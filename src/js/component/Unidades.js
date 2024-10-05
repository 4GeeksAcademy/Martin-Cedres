import React from "react";


//create your first component
const Unidades = ({ seconds }) => {
    // extraigo unidades
    const unidades = seconds % 10;

    return (
        <div className="text-center">
            <h1 style= {{fontSize: '150px'}} >{unidades}</h1>
        </div>
    );
};

export default Unidades;