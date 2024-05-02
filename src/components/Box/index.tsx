import React from 'react';

interface Ibox {
    title ?: string;
    number ?: number;
    bg?: string;
}

const Box = ({title, number , bg}: Ibox) => {
    return (
        <div style={{
            width : "200px",
            height: "200px",
            background: bg
        }}>
            <h1>{title}</h1>
            <h1>{number}</h1>
        </div>
    );
};

export default Box;