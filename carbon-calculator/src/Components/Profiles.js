import React from 'react';
import '../Pages/Board.css'
import styles from "../ComponentStyles/Board.module.css"

export default function profiles({Leaderboard, viewMode}) {
    const filteredData = Leaderboard.map(person => ({
        ...person,
        score: viewMode === 'weekly' ? person.weeklyScore : person.yearlyScore
    }));
    return (
        <div id="profile">
            <Item data = {filteredData}/>
        </div>
    )
}
function Item({data}) {
    if (!Array.isArray(data)) {
        return <div>Error: Data is not an array.</div>;
    }
    return (
        <div>
        {data.map((value, index) => (
            <div className = {styles.flex} key={index}>
                <div className = {styles.item}>
                    <img src={value.img} alt = ""/>
                    <div className = {styles.info}>
                        <h3 className = "name">{value.name}</h3>
                        <span>{value.location}</span>
                    </div>
                </div>
                <div className = {`${styles.item} ${styles.score}`}>
                    <span>{value.score}</span>
                </div>
            </div>
        ))}
        </div>
    )
}