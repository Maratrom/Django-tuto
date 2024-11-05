import './PlayerRow.css'

export default function PlayerRow({ player }) {
    return (
        <tr className='row'>
            <td className='pp'><img src={player.pp} className=""/></td>
            <th className='id'>{player.id}</th>
            <td className='name'>{player.name}</td>
            <td className='score'>{player.score}</td>
        </tr>
    )
}