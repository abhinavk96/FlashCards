import React, { Component } from 'react';
import logo from './logo.svg';
import Card from './Card/Card';
import DrawButton from './DrawButton/DrawButton';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.updateCard = this.updateCard.bind(this);
    this.state={
      cards:[{
        id: '1',
        word: 'Laconic',
        meaning: 'Brief and to the point; Effectively cut short',
        example: 'Jessica is so talkative that her sister thought the situation warrated conciseness and her being laconic.'
      },
      {
        id: '2',
        word: 'Insipid',
        meaning : 'Lacking taste or flavor',
        example: 'Too much sugar makes this otherwise delightfl fruit pie insipid.'
      }
    ],
      currentCard:{}
    }
  }
  componentWillMount(){
    const currentCards = this.state.cards;
    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    })
  }

  getRandomCard(currentCards) {
    return currentCards[Math.floor(Math.random()*currentCards.length)]
  }
  updateCard(){
    const currentCards=this.state.cards;
    this.setState({
      currentCard: this.getRandomCard(currentCards)
    })
  }
  render() {
    return (
      <div className="App">
        <div className="cardRow">
          <Card word={this.state.currentCard.word} meaning={this.state.currentCard.meaning} example={this.state.currentCard.example}/>
        </div>
        <div className="buttonRow">
          <DrawButton drawCard={this.updateCard}/>
        </div>
      </div>
    );
  }
}

export default App;
