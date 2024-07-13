import React, { useState } from 'react';
import Profiles from '../Components/Profiles';
import Sidebar from '../Components/Sidebar';
import { Leaderboard } from '../Components/Database';
import styles from "../ComponentStyles/Board.module.css"
import Logo from '../Components/Logo';

export default function Board() {
  const [viewMode, setViewMode] = useState('weekly');

  const handleClick = (mode) => {
    setViewMode(mode);
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.right}>
        <div className={styles.title}>
          <div>
            <Logo />
          </div>
        </div>
        <div className={styles.Leaderboard}>
          <h1 className={styles.htext}>Leaderboard</h1>
          <div className={styles.duration}>
            <button onClick={() => handleClick('weekly')} className={viewMode === 'weekly' ? 'active' : ''} data-id='7'>Weekly</button>
            <button onClick={() => handleClick('yearly')} className={viewMode === 'yearly' ? 'active' : ''} data-id='365'>Yearly</button>
          </div>

          <Profiles Leaderboard={Leaderboard} viewMode={viewMode} />
        </div>
      </div>
    </div>
  );
}
