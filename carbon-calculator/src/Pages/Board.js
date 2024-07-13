import React from 'react';
import './Board.css';
import Profiles from '../Components/Profiles.js';
import {Leaderboard} from '../Components/Database.js';

export default function Board() {

    const handleClick = () => {
        
    }

    return (
        <div className="Leaderboard">
            <h1>Leaderboard</h1>
            <div className="duration">
                <button data-id='7'>Weekly</button>
                <button data-id='365'>Yearly</button>
            </div>

            <Profiles Leaderboard = {Leaderboard}></Profiles>
        </div>
    )
}