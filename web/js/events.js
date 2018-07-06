var app = app || {};

app.events = {
    datas : {},

    init : () => {
        console.log("Appel script : events.js");
        app.events.loadDatas();
    },

    loadDatas : (res) => {
        if( res === undefined) {
            app.api.get('event', app.events.loadDatas, sessionStorage.getItem('token'), app.events.loadDatas);
        } else {
            app.events.datas = res;
        }
    },

    displayEvents : (events) => {
        if( events === undefined ) {
            // Display erreur
        } else {
            for( event in events['datas'] ) {
                $('#list-events').append('<tr><td>' + events['datas'][event].date + '</td><td>'+ events['datas'][event].data + '</td><td>' + events['datas'][event].device.device_type_id + '</td></tr>');

            }
        }
    }
}

app.events.init();
