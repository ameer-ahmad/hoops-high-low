import React, { useState, useEffect, useCallback } from 'react'
import PlayerCard from './PlayerCard';

const Game = () => {

    const [isGameStarted, setIsGameStarted] = useState(false);
    const [players, setPlayers] = useState(null);
    const [player1, setPlayer1] = useState(null);
    const [player2, setPlayer2] = useState(null);
    const [stat, setStat] = useState(null);
    const [hideStat, setHideStat] = useState(true);
    const [score, setScore] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);

    useEffect(() => {
        fetch('https://ameer-ahmad.github.io/scrape-nba-stats/player_stats.json')
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            setPlayers(data);
          })
          .catch(error => {
            console.log(error)
          });
    }, []);

    const generatePlayer = useCallback(() => {
        return players[Math.floor(Math.random() * players.length)]
    }, [players]);

    const randomStat = () => {
        let num = Math.floor(Math.random() * 14)

        switch (num) {
            case 0:
            case 1:
                setStat("mpg");
                break;
            case 2:
            case 3:
            case 4:
            case 12:
            case 13:
                setStat("ppg");
                break;
            case 5:
            case 6:
                setStat("rpg");
                break;
            case 7:
            case 8:
                setStat("apg");
                break;
            case 9:
                setStat("tpg");
                break;
            case 10:
                setStat("spg");
                break;
            case 11:
                setStat("bpg");
                break;
            default:
                setStat("ppg")
        }
    }

    const checkAnswer = (e) => {
        setHideStat(false)
        setTimeout(() => {
            if (e.target.innerHTML.includes("Higher")) {
                if (parseFloat(player2[stat]) >= parseFloat(player1[stat])) {
                    setScore(prev => prev + 1);
                    setHideStat(true)
                    setUpGame(false, player2)
                } else {
                    setIsGameOver(true)
                    setIsGameStarted(false)
                    console.log("you lose")
                }
            } else {
                if (parseFloat(player2[stat]) <= parseFloat(player1[stat])) {
                    setScore(prev => prev + 1);
                    setHideStat(true)
                    setUpGame(false, player2)
                } else {
                    setIsGameOver(true)
                    setIsGameStarted(false)
                    console.log("you lose")
                }
            }
        }, 1500);
        
    }

    const setUpGame = useCallback((firstRound, secondPlayer={}) => {
        let player1Temp = secondPlayer
        if (firstRound) {
            player1Temp = generatePlayer()
        } 

        setPlayer1(player1Temp)

        let player2Temp = generatePlayer()
        while (player2Temp === player1Temp) {
          player2Temp = generatePlayer()
        }
        setPlayer2(player2Temp)
        randomStat()
    }, [generatePlayer])

    const playAgain = () => {
        setIsGameOver(false)
        setIsGameStarted(true)
        setScore(0)
        setHideStat(true)
        setUpGame(true)
    }

    useEffect(() => {
        if (players) {
          setUpGame(true)
        }
      }, [ players, generatePlayer, setUpGame]);

    

  return (
    <div className="container">
        <div className={isGameStarted || isGameOver ? "info hide" : "info"}>
            <h2>Welcome to</h2>
            <h1>Hoops High-Low</h1>
            <h3>Do you know who averages more?</h3>
            <p>A classic game of higher or lower but with NBA Statistics. All stats are from the 2023-24 season and are updated daily.</p>
            <div 
                className="start-game-btn"
                onClick={() => setIsGameStarted(true)}
            >
                start game
            </div>
        </div>

        
        <div className={isGameStarted ? "game" : "game hide"}>
            {isGameStarted && 
                <>
                    <PlayerCard player={player1} stat={stat} />
                    <PlayerCard player={player2} stat={stat} hideStat={hideStat} checkAnswer={checkAnswer} />
                    <p className='score'>Score: {score}</p>
                </>
            }
        </div>
        

        <div className={isGameOver ? "game-over" : "game-over hide"}>
            <p>You scored:</p>
            <h4>{score}</h4>
            <div className='play-again-btn' onClick={playAgain}>Play Again</div>
        </div>

    </div>
  )
}

export default Game