# Slippi Sorter

## Purpose
This script is designed for use after a play session using slippi. You'll ideally take the generated Slippi folder with the slp files to be sorted for organizing, put it inside the root of this project (run this script) and then rename the Slippi folder and store it somewhere for later review.

## Outcome
By sorting, the script will generate a folder for each combination players ("Player1 vs Player2", "Player2 vs Player3", etc.) and put each .slp file into it's corresponding folder. 
The tag of the player takes priority on the naming of the folder, so if a player changes tags, different folders will be created as if it were different players, if no tag is used, "Player[x]" will be used for the player name, being [x] the port of the player.

## Requirements, installation and usage
Install node: https://nodejs.org/en/download/
- Download or clone this repository
- Run on your CLI, from the directory where you have this project: `npm install slp-parser-js`
- Drag or create a folder named "Slippi" into the root of this project.
*"Slippi" folder should contain .slp files to sort only, with no subdirectories.*
- If you created the folder "Slippi", drag the matches you want sorted to the root of the "Slippi" folder.
- Run on your CLI `node sorter.js`

