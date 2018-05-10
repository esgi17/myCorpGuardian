var app = app || {};

app.api = {
    post : (route, data) => {
        var url = app.config.pathAPI + route;
        $.ajax({
            url : url,
            type : 'post',
            dataType  : 'json',
            data : data
        })
        .done( function(res) {
            console.log(res);
        })
        .fail( function(err) {
            console.error(err);
        });
    },

    get : (route) => {
        var url = app.config.pathAPI + route;
        $.ajax({
            url : url,
            method : 'get',
            dataType : 'json'
        })
        .done( function(res) {
            console.log(res);
            return res;
        })
        .fail( function(err) {
            console.error(err);
        })
    }
}
