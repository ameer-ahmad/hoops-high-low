# Hoops High-Low

Welcome to Hoops High-Low, A classic game of higher or lower but with NBA Statistics. All stats are from the 2023-24 season and are updated daily.

View the deployed app here: [Hoops High-Low](https://ameer-ahmad.github.io/hoops-high-low/)

## Project Description: 
Hoops High-Low is a game of higher or lower which is built in React. Once you start the game the user will be presented with two NBA players. The first NBA player will have a stat of his displayed, either mpg, ppg, rpg, apg, spg, bpg, or tpg. The stat is his average for the 2023-24 season. The second player will not have their stat displayed. The user will have to guess whether player 2's stat average is higher or lower than player 1's. If the user guesses correctly, they gain a point. At this point, player 2 now becomes player 1 and has one of their stats is randomly displayed. A random player is selected for player 2, and the game continues until the user guesses incorrectly. Once the game is over, the final score is displayed, and the user has the option to play again.

## Web Scraping:
All the NBA statistics were scraped by me from NBA.com using Selenium and a Python script written by me. You can view the code for the python script [here](https://github.com/ameer-ahmad/scrape-nba-stats)
