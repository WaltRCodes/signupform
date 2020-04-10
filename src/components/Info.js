import React from 'react';

export default function Info(props) {
    return (
        <div>
            <p>{props.username}</p>
            <p>{props.password}</p>
            <p>{props.age}</p>
            <p>{props.gender}</p>
            <p>{props.occupation}</p>
        </div>
    );
}