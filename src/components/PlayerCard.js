import React from 'react'

const PlayerCard = ({ player, stat, hideStat, checkAnswer }) => {


  return (
    <div className='card'>
        <img src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${player.image}.png`} alt={player.name} />
        <h2>{player.name}</h2>
        <p>averages</p>
        {hideStat ? (
            <div className='btn-container'>
                <span onClick={checkAnswer}>Higher &#x25B2;</span>
                <span onClick={checkAnswer}>Lower &#x25BC;</span>
            </div>
        ) : (
            <h1>{player[stat]} {stat}</h1>
        )}
        
    </div>
  )
}

export default PlayerCard