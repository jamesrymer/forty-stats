import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlayerBar from './components/PlayerBar';
import './Leaderboard.css';

function Leaderboard(props) {
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    // Your useEffect logic here
  }, []);

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='leaderboard-wrapper'>
      <select className='dropdown' value={selectedOption} onChange={handleDropdownChange}>
        <option value='option1'>Wins</option>
        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
      </select>

      {props.playerData.map((player, index) => (
        <PlayerBar key={index} playerData={player} />
      ))}
    </div>
  );
}

export default Leaderboard;