var app = app || {};

app.devices = {
    datas : {},

    init : () => {
        console.log("Appel script : devices.js");
        app.devices.loadDatas();
    },

    loadDatas : (res) => {
        if( res === undefined) {
            app.api.get('device', app.devices.loadDatas, sessionStorage.getItem('token'), app.devices.loadDatas);
        } else {
            app.devices.datas = res;
        }
    },

    displayDevices : (devices) => {
        if( devices === undefined) {
            // display erreurs
        } else {
            for( device in devices['datas'] ) {
                $('#list-devices').append('<tr><td>' + devices['datas'][device].id + '</td><td>' + devices['datas'][device].deviceType.name + '</td></tr>')
            }
        }
    }
};

app.devices.init();
