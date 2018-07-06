var app = app || {};

app.cameras = {

    datas : {},

    init : () => {
        console.log("Appel Script : cameras.js");
        app.cameras.loadDatas();
    },

    loadDatas : (res) => {
        if( res === undefined) {
            app.api.get('cameras', app.cameras.loadDatas, sessionStorage.getItem('token'), app.cameras.loadDatas);
        } else {
            app.cameras.datas = res;
        }
    }

}

app.cameras.init();
