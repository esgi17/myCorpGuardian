var app = app || {};

app.home = {
  init : () => {
      app.home.initSession();
      app.home.initHome();

      // Récupérer Token de connexion

      // Construire page d'accueil

  },

  initSession : () => {
      var page = app.home.getCurrentNav();
      if( sessionStorage.getItem('page') != page) {
        sessionStorage.setItem('page', page);
      }
  },

  initHome : () => {
      const div = $("#container");
      this.loadHtml(div, 'html/users.html');
  },

  loadHtml : (container, contentPath) => {
      container.hide().load(contentPath).show();
  },

  navigate : () => {
    console.log('navigate');
  },

  getCurrentNav : () => {
      return $(".navbar .active").attr('id');
  }

}

app.home.init()
