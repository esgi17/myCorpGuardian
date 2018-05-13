var app = app || {};

app.api = {
    post : (route, data, method) => {
        var url = app.main.api + route;
        $.ajax({
            url : url,
            type : 'post',
            dataType  : 'json',
            data : data,
            crossDomain: true
        })
        .done( function(res) {
            console.log(res);
        })
        .fail( function(err) {
            console.error(err);
        });
    },

    get : (route, method) => {
      console.log("ok");
        var url = app.main.api + route;
        $.ajax({
            url : url,
            method : 'get',
            dataType : 'json',
            crossDomain: true
        })
        .done( function(res) {
            console.log(res);
            method(res);
        })
        .fail( function(err) {
            console.error(err);
        })
    }
}
