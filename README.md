# Hoops High-Low

Welcome to Hoops High-Low, A classic game of higher or lower but with NBA Statistics. All stats are from the 2023-24 season and are updated daily.

View the deployed app here: [Hoops High-Low](https://ameer-ahmad.github.io/hoops-high-low/)

## Project Description: 
Hoops High-Low is a game of higher or lower which is built in React. Once you start the game the user will be presented with two NBA players. The first NBA player will have a stat of his displayed, either mpg, ppg, rpg, apg, spg, bpg, or tpg. The stat is his average for the 2023-24 season. The second player will not have their stat displayed. The user will have to guess whether player 2's stat average is higher or lower than player 1's. If the user guesses correctly, they gain a point. At this point, player 2 now becomes player 1 and has one of their stats is randomly displayed. A random player is selected for player 2, and the game continues until the user guesses incorrectly. Once the game is over, the final score is displayed, and the user has the option to play again.

## Web Scraping:
All the NBA statistics were scraped by me from NBA.com using Selenium and a Python script written by me. You can view the code for the python script [here](https://github.com/ameer-ahmad/scrape-nba-stats). The Python script is automated and runs every morning at 7 am to get the latest statistics, convert them to JSON, and upload them to GitHub where it is hosted and available for the React app to use.

## Inspiration:
Hoops High-Low is inspired by other daily NBA games such as [Hoop Grids](https://www.hoopgrids.com/), [Poeltl](https://poeltl.dunk.town/), and [Dribble](https://dribblegame.com/). I enjoy playing these games, as well as [the Higher Lower game](https://www.higherlowergame.com/). This led me to make an NBA version of the Higher Lower game. If you enjoy playing my game let me know! :)

## Quickstart:
You can view and play the game here: [Hoops High-Low](https://ameer-ahmad.github.io/hoops-high-low/)

If you'd like to run the project on your machine locally, follow these steps:
1. Open your terminal.
2. Change the current working directory to the location where you want the cloned directory.
3. Clone the repository
```
git clone https://github.com/ameer-ahmad/hoops-high-low.git
```
4. Navigate to the project directory:
```
cd your-project-name
```
5. Install the project dependencies:
```
npm install
```
6. Run the project
```
npm install
```
7. Open http://localhost:3000 to view it in your browser.
