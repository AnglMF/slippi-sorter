const { default: SlippiGame } = require('slp-parser-js');
const fs = require('fs');
const path = require('path');
const folder = './Slippi/';

function getMatchParticipats(playersArray, doubles) {
    var playersTags = [];
    var tag = ''
    for(var player in playersArray) {
        if (playersArray[player].nametag === '') {
            tag = 'Player' + String(playersArray[player].port);
        }
        else {
            tag = playersArray[player].nametag;
        }
        console.log(playersArray[player].teamId)
        playersTags.push({'teamId': playersArray[player].teamId, 'player': tag});
    }
    if (doubles) {
        console.log(playersTags)
        playersTags.sort(function(a, b) {
            return a.teamId - b.teamId
        });
        stringName = playersTags[0].player + '+' + playersTags[1].player + ' v ' + playersTags[2].player + '+' + playersTags[3].player
    }
    else {
        stringName = playersTags[0].player + ' v ' + playersTags[1].player;
    }
    return stringName
}

function moveFile(origin, destination, og_file, new_file) {
    fs.mkdir(origin + destination, (err) => {
        if (!err) {
        	console.log('Created directory '+ destination);
    	}
    });
    fs.rename(og_file, new_file, (err) => {
        if (!err) {
            console.log(og_file + ' moved to ' + destination)
        }
    });
    console.log('moved'); //but not really
}

fs.readdir(folder, function(err, items) {

    console.log("Reading " + items.length + " .slp files from directory\n");
    var matchName = '';
    var matchParticipants = [];
    var matchArray = [];
    for (var i=0; i<items.length; i++) {
    	var og_path = path.resolve() + '/Slippi/' + items[i];
    	var absoluteOGPath = og_path.replace(/\\/g,"/");

        const game = new SlippiGame(folder + items[i]);
        const settings = game.getSettings();
        console.log(i + ' - ' + items[i]);
        matchName = getMatchParticipats(settings.players, settings.isTeams);
        console.log(matchName);
        var new_path = path.resolve() + '/Slippi/' + matchName + '/' + items[i];
        var absoluteNewPath = new_path.replace(/\\/g,"/");

        moveFile(folder, matchName, absoluteOGPath, absoluteNewPath)
    }    
});