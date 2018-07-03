var app = app || {};

app.devices = {
    init : () => {
        console.log("Appel script : devices.js");
        app.api.get('device', app.devices.displayDevices, sessionStorage.getItem('token'), app.devices.displayDevices);
    },

    displayDevices : (devices) => {
        if( devices === undefined) {
            // display erreurs
        } else {
            // console.log(devices);
            for( device in devices['datas'] ) {
                console.log(devices['datas'][device]);
                $('#list-devices').append('<tr><td>' + devices['datas'][device].id + '</td><td>' + devices['datas'][device].deviceType.name + '</td></tr>')
            }
        }
    }
};

app.devices.init();
