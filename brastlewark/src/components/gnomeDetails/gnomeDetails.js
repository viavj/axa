import React from 'react';
import './gnomeDetails.css';

const gnomeDetails = props => {
    return (
        <div className={`base ${props.className}`}>
            <img src={props.gnome.thumbnail} />
            <p><strong>Name:</strong> {props.gnome.name}</p>
            <p><strong>Age:</strong> {props.gnome.age}</p>

            <div className='flex-container wrap professions'>
                <strong>Professions:</strong>
                <div className='flex-container wrap '>{props.gnome.hasOwnProperty('professions') ?
                    props.gnome.professions.map((prof, index) => <p key={index}>{prof}</p>)
                    : null}
                </div>
            </div>
            <div className='flex-container wrap friends'>
                <strong>Friends:</strong>
                <div className='flex-container wrap '>{props.gnome.hasOwnProperty('friends') ?
                    props.gnome.friends.map((friend, index) => <p key={index}>{friend}</p>)
                    : null}
                </div>
            </div>
            
            <p><strong>Height:</strong> {Math.round(props.gnome.height)}</p>
            <p><strong>Weight:</strong> {Math.round(props.gnome.weight)}</p>
        </div>
    )
}
export default gnomeDetails;