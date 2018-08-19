import React, { Component } from 'react';
import logo from './logo.svg';
import Card from './Card/Card';
import DrawButton from './DrawButton/DrawButton';
import './App.css';
import { DB_CONFIG } from './Config/Firebase/db_config';
import firebase from 'firebase/app';
import 'firebase/database';
import {init as firebaseInit} from 'firebase/firebase';


class App extends Component {
  constructor(props) {
    super(props);
    this.updateCard = this.updateCard.bind(this);
    this.toggleCard = this.toggleCard.bind(this);    
    this.app = !firebase.apps.length ? firebase.initializeApp(DB_CONFIG) : firebase.app();
    this.database = this.app.database().ref().child('cards'); 
    this.state={
      cards:[],
      currentCard:{},
      loading:true,
      color:this.getRandomColor()
    }
  }
  componentWillMount(){
    document.title="Flash Cards"
    const currentCards = this.state.cards;
    this.database.on('child_added', snap => {
      currentCards.push({
        id: snap.key,
        word: snap.val().word,
        meaning: snap.val().meaning,
        example: snap.val().example
      });
      this.setState({
        cards: currentCards,
        currentCard: this.getRandomCard(currentCards),
        flipped: false,
        loading:false,
      });
    },
  err=>{
    console.log("The read failed: " + err.code);
  })
  }

  getRandomCard(currentCards) {
    return currentCards[Math.floor(Math.random()*currentCards.length)]
  }
  getRandomColor(){
    let colorCode = Math.floor(Math.random()*100)%20;
    let name;
    var colorDict =
    {
      0: "zero",
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
      7: "seven",
      8: "eight",
      9: "nine",
      10: "ten",
      11: "eleven",
      12: "twelve",
      13: "thirteen",
      14: "fourteen",
      15: "fifteen",
      16: "sixteen",
      17: "seventeen",
      18: "eighteen",
      19: "nineteen", 
      20: "twenty"
    }
    return colorDict[colorCode];

  }
  updateCard(){
    const currentCards=this.state.cards;
    this.setState({
      currentCard: this.getRandomCard(currentCards),
      flipped: false,
      color:this.getRandomColor()
    })
  }
  toggleCard(){
    const currentState = this.state.flipped;
    this.setState({ flipped: !currentState });
  }
  
  render() {    
    return (
      <div className="App">
        <div className="container">
          <Card loading = {this.state.loading} toggleCard={this.toggleCard} flipped={this.state.flipped} word={this.state.currentCard.word} meaning={this.state.currentCard.meaning} example={this.state.currentCard.example} color={this.state.color}/>
        </div>
        <div className="buttonRow">
          <DrawButton drawCard={this.updateCard}/>
        </div>
      <a href="https://github.com/CosmicCoder96/FlashCards" className="github-corner" aria-label="View source on Github">
   <svg width="80" height="80" viewBox="0 0 250 250" className="github" aria-hidden="true">
      <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
      <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor"  class="octo-arm"></path>
      <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>
   </svg>
  </a>
      </div>
  
      
    );
  }
}

export default App;
