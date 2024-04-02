import React, { useEffect, useState } from 'react';
import './PlayerBar.css';

const PlayerBar = (props) => {
    // Your code here
    const [isSelected, setIsSelected] = useState(false);
    const convertMinutesToHoursAndMinutes = (minutes) => {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        return `${hours}h ${remainingMinutes}m`;
    };

    //const timePlayed = convertMinutesToHoursAndMinutes(props.playerData.stats.all.overall.minutesPlayed);
    return (
       <div className={'playerBarWrapper'} onClick={() => setIsSelected(!isSelected)}>
            {
                !isSelected ?
                (   <div className='playerBar closed'>
                        <div className='top'>
                            <div className='left'> 
                                <img className='battleStar' src="images/battle-star.png" alt="" />
                                <span className='level'> {props.playerData.battlePass.level}</span>
                                <h3 className='playerName'>{props.playerData.account.name}</h3>
                            </div>
                            <div className='right'>
                                <span className='winCount'> {props.playerData.stats.all.overall.wins}  W's</span>
                            </div>   
                        </div>
                       
                          
                    </div>
                ) :
                (
                    <div className='playerBar closed'>
                        <div className='top'>
                            <div className='left'> 
                                <img className='battleStar' src="./src/assets/battle-star.png" alt="" />
                                <span className='level'> {props.playerData.battlePass.level}</span>
                                <h3 className='playerName'>{props.playerData.account.name}</h3>
                            </div>
                            {/* <div className='right'>
                                <span className='winCount'> {props.playerData.stats.all.overall.wins}</span>
                            </div>    */}
                        </div>
                        <div className='bottom'>
                            <div className='stats'>
                            <div className='stat'>
                                <div className='statName'>Wins</div>
                                    <span className='statValue'>{props.playerData.stats.all.overall.wins}</span>
                                </div>
                                <div className='stat'>
                                    <div className='statName'>Kills</div>
                                    <span className='statValue'>{props.playerData.stats.all.overall.kills}</span>
                                </div>
                                <div className='stat'>
                                    <div className='statName'>K/D</div>
                                    <span className='statValue'>{props.playerData.stats.all.overall.kd}</span>
                                </div>
                                <div className='stat'>
                                    <div className='statName'>Matches</div>
                                    <span className='statValue'>{props.playerData.stats.all.overall.matches}</span>
                                </div>
                                {/* <div className='stat'>
                                    <div className='statName'>Time Played</div>
                                    <span className='statValue'>{convertMinutesToHoursAndMinutes(props.playerData.stats.all.overall.minutesPlayed)}</span>
                                </div> */}
                                <div className='stat'>
                                    <div className='statName'>Kills/Match</div>
                                    <span className='statValue'>{props.playerData.stats.all.overall.killsPerMatch}</span>
                                </div>
                                <div className='stat'>
                                    <div className='statName'>Win Rate</div>
                                    <span className='statValue'>{props.playerData.stats.all.overall.winRate}%</span>
                                </div>
                            </div>
                         </div> 
                    </div>
                ) 

            }
       </div>
    );
};

export default PlayerBar;