var app = app || {};

app.events = {
    init : () => {
        console.log("Appel script : events.js");
        app.api.get('event', app.events.displayEvents, sessionStorage.getItem('token'), app.events.displayEvents)
    },

    displayEvents : (events) => {
        if( events === undefined ) {
            // Display erreur
        } else {
            // console.log(events);
            for( event in events['datas'] ) {
                console.log(events['datas'][event]);
                $('#list-events').append('<tr><td>' + events['datas'][event].date + '</td><td>'+ events['datas'][event].data + '</td><td>' + events['datas'][event].device.device_type_id + '</td></tr>');

            }
        }
    }
}

app.events.init();
