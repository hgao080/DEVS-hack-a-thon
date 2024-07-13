import React from 'react';
import '../Pages/Board.css'

export default function profiles({Leaderboard}) {
    return (
        <div id="profile">
            <Item data = {Leaderboard}/>
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
            <div className = "flex" key={index}>
                <div className = "item">
                    <img src={value.img} alt = ""/>
                    <div className = "info">
                        <h3 className = "name">{value.name}</h3>
                        <span>{value.location}</span>
                    </div>
                </div>
                <div className = "item score">
                    <span>{value.score}</span>
                </div>
            </div>
        ))}
        </div>
    )
}