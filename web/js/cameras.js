import * as streamedian from 'Medias/streamedian/player.js';

var app = app || {};

app.cameras = {
    init : () => {
        console.log("Appel Script : cameras.js");
    },

    play : ( playerDiv ) => {
        let player = new streamedian.WSPlayer(playerDiv, )
    }
}

app.cameras.init();
