var app = app || {};

app.api = {
    post : (route, data, method, errorMethod) => {
        var url = app.main.api + route;
        $.ajax({
            url : url,
            type : 'post',
            dataType  : 'json',
            data : data,
            crossDomain: true
        })
        .done( function(res) {
            method(res)
        })
        .fail( function(err) {
            //console.error(err);
            console.error(err);
            errorMethod();
        });
    },

    get : (route, method, token, errorMethod) => {
        var url = app.main.api + route + '?token=' + token;
        $.ajax({
            url : url,
            method : 'get',
            dataType : 'json',
            crossDomain: true
        })
        .done( function(res) {
            method(res);
        })
        .fail( function(err) {
            errorMethod(err);
        })
    }
}
