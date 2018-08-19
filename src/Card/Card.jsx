import React, { Component } from 'react';
import './Card.css';

class Card extends Component{ 
    constructor(props) {
        super(props);
    }

    render()
   { return(
   <div className={"flip-container" + (this.props.flipped ? " flipped": "")} onClick={this.props.toggleCard}>
        <div className={"flippable " + this.props.color} >
            <div className="front">
                <div className="word">{this.props.word}</div>
            </div>
            <div className="back">
                <div className="meaning">{this.props.meaning}</div>
                <div className="example">{this.props.example}</div>
            </div>
        </div>
    </div>)
   }
}
export default Card;