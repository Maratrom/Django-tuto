import { useState } from "react";
import './PlayerTable.css'

import PlayerRow from '../PlayerRow/PlayerRow'

export default function PlayerTable({ players }) {
    const [template, setTemplate] = useState([]);
    for (const player in players) {
        template.push(<PlayerRow key={player.id} player={player} />);
    }


    return (
        <table className="player-table">
            <thead>
                <tr>
                    <th></th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                {players.map((player) => (
                    <PlayerRow player={player} key={player.id}/>
                ))}
            </tbody>
        </table>

    )
}