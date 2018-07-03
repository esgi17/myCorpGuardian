var app = app || {};

app.home = {
  init : () => {
      console.log("Appel script : home.js");
      app.home.initHome();

  },

  initHome : () => {
      var div = $("#container-home");

      app.main.create('users');
      app.main.create('events');
      app.main.create('devices');
      app.main.create('cameras');
      // app.main.create('manage', div);
  }


}

app.home.init()
