import React from "react";
import webpack, { IgnorePlugin } from 'webpack';
import scissor from "./assets/scissor.jpg";
import rock from "../../assets/img/coin.jpg";
import paper from "./assets/paper.jpg";

const Player = (weapon) => {
  return <div className = "player">

   <img className="player-image"
   src={
     weapon === "rock" ? rock : weapon === "scissor" ? scissor : paper

    } 
    alt="rock paper scisor" />
  </div>;
};
export default Player;
