import React, { Component } from 'react';
import './DrawButton.css';

class DrawButton extends Component {
    constructor(props)
    {
        super(props);
        this.drawCard = this.drawCard.bind(this);
    }
    drawCard() {
        this.props.drawCard();
    }
    render(props) {
        return(
            <div className="buttonContainer">
                <a href="#" className="btn red" onClick={this.drawCard}>Draw Card</a>
            </div>
        )
    }
}

export default DrawButton;
