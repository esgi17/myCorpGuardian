var app = app || {};

app.login = {
    init : () => {

        $(document).on('click', '#submit-login', function() {
            var login = $("#inputLogin").val();
            var password = $("#inputPassword").val();
            app.login.connect(login, password);
        });
    },

    connect : (login, password) => {
        app.api.post('', { login : login, password : password }, app.login.authentify, app.login.error);
    },

    authentify : (res) => {
        alert("authentify");
        sessionStorage.setItem('token', res.token)
        app.main.init();
    },

    error : () => {
       console.log("Erreur de connexion");
    }
}

app.login.init();
