import React, { useEffect, useState } from 'react'
import Leaderboard from './containers/leaderboard/Leaderboard'
import Header from './Components/Header/Header'
import './App.css'

function App() {
  const players = [
    
    { playerName: "IxAMxAxPuhpey", accountType: "epic" },
    { playerName: "SubrosaIsSugaDDY", accountType: "epic" },
    { playerName: "NachoBerry", accountType: "psn" },
    { playerName: "Subrosa8894", accountType: "psn" },
    { playerName: "puppy-kicker", accountType: "epic" },

  ];

  const [playerData, setPlayerData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = [];
      for (const player of players) {
        const response = await fetch(`https://sock-check-forty-gang-0a6d635aa1b8.herokuapp.com/allPlayerStats?playerName=${player.playerName}&accountType=${player.accountType}&timeWindow=season`);
        const playerData = await response.json();
        data.push(playerData.data);
      }
      data.sort((a, b) => b.stats.all.overall.wins - a.stats.all.overall.wins); // Replace 'someProperty' with the property you want to sort by
      //data.sort((a, b) => b.battlePass.level - a.battlePass.level); // Replace 'someProperty' with the property you want to sort by

      setPlayerData(data);
    };

    fetchData();
  }, []);

  

  return (
    <>
     
      <Header />
  
      <Leaderboard playerData={playerData} />
    
    
        
    </>
  )
}

export default App