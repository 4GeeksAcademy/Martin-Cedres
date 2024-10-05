import React from "react";


//create your first component
const CentenaDeMil = ({ seconds }) => {
    // extraigo centenas de mil
    const centenaDeMil = Math.floor(seconds / 100000) % 10;

    return (
        <div className="text-center">
            <h1 style={{ fontSize: '150px' }}>{centenaDeMil}</h1>
        </div>
    );
};

export default CentenaDeMil;