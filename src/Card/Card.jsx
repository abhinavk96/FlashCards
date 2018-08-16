import React, { Component } from 'react';
import './Card.css';

const Card = (props) => (
    <div className="flip-container" >
        <div className={"flippable "+props.color} >
            <div className="front">
                <div className="word">{props.word}</div>
            </div>
            <div className="back">
                <div className="meaning">{props.meaning}</div>
                <div className="example">{props.example}</div>
            </div>
        </div>
    </div>
)
export default Card;