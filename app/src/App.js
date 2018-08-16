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
    this.app = !firebase.apps.length ? firebase.initializeApp(DB_CONFIG) : firebase.app();
    this.database = this.app.database().ref().child('cards'); 
    this.state={
      cards:[],
      currentCard:{}
    }
  }
  componentWillMount(){
    const currentCards = this.state.cards;
    this.database.on('child_added', snap => {
      console.log(1);
      currentCards.push({
        id: snap.key,
        word: snap.val().word,
        meaning: snap.val().meaning,
        example: snap.val().example
      });
      this.setState({
        cards: currentCards,
        currentCard: this.getRandomCard(currentCards)
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
    let colorCode = Math.floor(Math.random()*10)%4;
    let name;
    switch(colorCode){
      case 0:
      name="one";
      break;
      case 1:
      name="two";
      break;
      case 2:
      name="three";
      break;
      case 3:
      name="four";
      break;
      default:
      name="one";
      break;
    }
    return name;

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
        <div className="container">
          <Card word={this.state.currentCard.word} meaning={this.state.currentCard.meaning} example={this.state.currentCard.example} color={this.getRandomColor()}/>
        </div>
        <div className="buttonRow">
          <DrawButton drawCard={this.updateCard}/>
        </div>
      </div>
    );
  }
}

export default App;
