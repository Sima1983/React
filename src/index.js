import React, { Component } from "react";
import ReactDOM from "react-dom";
import Player from "./player";
import "./styles.css";

const weapons = ["rock", "papper", "scissors"];

class App extends React.Component {
  state = {
    playerOne: weapons[0],
    playerTwo: weapons[0],
    winner: ""
  };
  
  
     startGame =() => {

       let count = 0;
       let gameInterval = setInterval(() => {
       count ++;

       this.setState({
       playerTwo : weapons [Math .floor ( Math.random () * weapons.length)],
       winner : ""

     })
        if (count > 5)
        {
       clearInterval(gameInterval);
       this.setState({
         winner : this.selectWinner()
      });
    }
   },100)
  }

  selectWinner = () => {
    console.log(test);

    const{playerOne,playerTwo}= this.state;

    if (playerOne === playerTwo){
      return "Oops its Tie"
    }
    else if ((playerOne === "rock" && playerTwo === "scissor") || 
    (playerOne === "scissor " && playerTwo === "paper") || 
    (playerOne === "paper" &&playerTwo === "rock")
    )
    {
      return "Player One Wins"
    } else {
      return "Player Two Wins";
    }
  };

  selectWeapon = (weapon) => {
    this.setState({

      playerOne:weapon,
      winnner:""

    })
  }

  render() {
   
    const {playerOne,playerTwo,winner} =this.state;

    return (
      <>
        <h1>Wellcome</h1>
        <h2> Rock Paper Scissors</h2>

        <div >
          <Player weapon={playerOne} />
          <Player weapon={playerTwo} />
        </div>

        <div>
          <button className="weaponBtn" onClick={() => this.selectWeapon('rock')}>  rock </button>
          <button className="weaponBtn" onClick={() => this.selectWeapon('paper')}>  paper </button>
          <button className="weaponBtn" onClick={() => this.selectWeapon('scissor')}>  scissor </button>
          
          
        </div>
        <div className="winner"> {winner ? this.selectWinner() : null }</div>

        <button type="button"onClick ={this.startGame}> Start</button>

      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
