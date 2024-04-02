import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlayerBar from './components/PlayerBar';
import './Leaderboard.css';
function Leaderboard(props) {

  useEffect(() => {
  }, []);

  return (
    <div className='leaderboard-wrapper'>
     
     {props.playerData.map((player, index) => (
       <PlayerBar key={index} playerData={player} />
      ))}

    </div>
  );
}

export default Leaderboard;