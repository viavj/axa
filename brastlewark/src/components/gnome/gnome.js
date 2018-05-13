import React from 'react';
import './gnome.css';

const gnome = props => {
    return (
        <div className={`base ${props.className}`} onClick={props.handleGnomeClick}>
            <img src={props.gnome.thumbnail} />
            <p><strong>Name:</strong> {props.gnome.name}</p>
            <p><strong>Age:</strong> {props.gnome.age}</p>
        </div>
    )
}
export default gnome;