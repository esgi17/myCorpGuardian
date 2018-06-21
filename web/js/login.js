var app = app || {};

app.login = {
    init : () => {

        $(document).on('click', '#submit-login', function() {
          console.log("Login page");
            var login = $("#inputLogin").val();
            var password = $("#inputPassword").val();
            console.log(login);
            app.login.connect(login, password);
        });
    },

    connect : (login, password) => {
        console.log(login, password);
        app.api.post('', { login : login, password : password }, app.login.authentify, app.login.error);
    },

    authentify : (res) => {
        alert("authentify");
        sessionStorage.setItem('token', res.token)
        console.log("ZOPKD");
        console.log(app.main.token);
        app.main.init();
    },

    error : () => {
       console.log("Erreur de connexion");
    }
}

app.login.init();
