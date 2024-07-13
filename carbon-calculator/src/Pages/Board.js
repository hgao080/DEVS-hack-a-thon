import React from 'react';
import './Board.css';
import Profiles from '../Components/Profiles';
import Sidebar from '../Components/Sidebar'; // Assuming Sidebar.js exports Sidebar component
import { FaLeaf } from 'react-icons/fa'; // Importing FaLeaf from react-icons/fa
import { Leaderboard } from '../Components/Database'; // Adjust path as per your setup

export default function Board() {
    const handleClick = () => {
        // Handle click logic if needed
    };

    return (
        <div className="dashboard">
            {/* Sidebar */}
            <div className="sidebar">
                <Sidebar />
            </div>

            {/* Right Section: Leaderboard */}
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
                        <button data-id='7'>Weekly</button>
                        <button data-id='365'>Yearly</button>
                    </div>

                    <Profiles Leaderboard={Leaderboard} />
                </div>
            </div>
        </div>
    );
}
