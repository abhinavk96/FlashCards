import React, { Component } from 'react';
import './Card.css';

class Card extends Component{ 
    constructor(props) {
        super(props);
        this.toggleClass= this.toggleClass.bind(this);
        this.state = {
            flipped: false,
        };
    }
    toggleClass()
    {
        const currentState = this.state.flipped;
        this.setState({ flipped: !currentState });
        console.log("Flipped!")
    }
    render()
   { return(
   <div className={"flip-container" + (this.state.flipped ? " flipped": "")} onClick={this.toggleClass}>
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