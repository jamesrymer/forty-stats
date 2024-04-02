import React, { useEffect, useState } from 'react';
import './PlayerBar.css';

const PlayerBar = (props) => {
    // Your code here
    const [isSelected, setIsSelected] = useState(false);

    return (
       <div className={'playerBarWrapper'} onClick={() => setIsSelected(!isSelected)}>
            {
                !isSelected ?
                (   <div className='playerBar closed'>
                        <div className='top'>
                            <div className='left'> 
                                <img className='battleStar' src="./src/assets/8B99381E-E8E7-4C9A-BCAB-615EF2423F21.png" alt="" />
                                <span className='level'> {props.playerData.battlePass.level}</span>
                                <h3 className='playerName'>{props.playerData.account.name}</h3>
                            </div>
                            <div className='right'>
                                <span className='winCount'> {props.playerData.stats.all.overall.wins}</span>
                            </div>   

                        </div>
                       
                          
                    </div>
                ) :
                (
                    <div className='playerBar closed'>
                        <div className='top'>
                            <img className='battleStar' src="./src/assets/8B99381E-E8E7-4C9A-BCAB-615EF2423F21.png" alt="" />
                            <span className='level'> {props.playerData.battlePass.level}</span>
                            <h3 className='playerName'>{props.playerData.account.name}</h3>
                           
                        </div>
                        <div className='bottom'>
                            <span className='wins'>Wins: {props.playerData.stats.all.overall.wins}</span>
                            <span className='kills'>Kills: {props.playerData.stats.all.overall.kills}</span>
                        </div> 
                          
                    </div>
                ) 

            }
       </div>
    );
};

export default PlayerBar;