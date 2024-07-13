import React, {useState} from 'react';
import './Board.css';
import Profiles from '../Components/Profiles';
import Sidebar from '../Components/Sidebar';
import { FaLeaf } from 'react-icons/fa';
import { Leaderboard } from '../Components/Database';

export default function Board() {
    const [viewMode, setViewMode] = useState('weekly'); 

    const handleClick = (mode) => {
        setViewMode(mode);
    };

    return (
        <div className="dashboard">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="right">
                <div className="title">
                    <div className="titleright">
                        <div className="text">Green<span className="green">Print</span>Life</div>
                        <FaLeaf className="green" />
                    </div>
                </div>
                <div className="Leaderboard">
                    <h1>Leaderboard</h1>
                    <div className="duration">
                    <button onClick={() => handleClick('weekly')} className={viewMode === 'weekly' ? 'active' : ''} data-id='7'>Weekly</button>
                    <button onClick={() => handleClick('yearly')} className={viewMode === 'yearly' ? 'active' : ''} data-id='365'>Yearly</button>
                    </div>

                    <Profiles Leaderboard={Leaderboard} viewMode = {viewMode} />
                </div>
            </div>
        </div>
    );
}
