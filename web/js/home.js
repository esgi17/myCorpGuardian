var app = app || {};

app.home = {
  init : () => {
      console.log("init");
      app.home.initHome();

  },

  initHome : () => {
      var div = $("#container-home");

      console.log('INIT HOME');
      app.main.create('users', div);
      app.main.create('devices', div);
      app.main.create('manage', div);
  }


}

app.home.init()
