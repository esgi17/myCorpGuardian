var app = app || {};

app.main = {
    appName : 'My Corp Guardian',

    api : 'http://127.0.0.1:3000/',

    version : '1.0',

    routes : [
        'users',
        'group',
        'events',
        //'cameras',
        'devices'
    ],

    datas : [],

    nbDatas : 0,

    init : () => {
        app.main.checkLogin();
        //app.main.initSession();
        app.main.initNavbar();
        //

        // app.main.navigate('home');
    },

    /***
    *  Vérification de la connection
    * Si connecté => initApp()
    * Sinon => login()
    ***/
    checkLogin : ( ) => {
        app.api.get('', app.main.initApp, sessionStorage.getItem('token'), app.main.login );
    },

    login : () => {
        var page = 'login';
        sessionStorage.setItem('page', page);
        app.main.loadView($("#container"), 'html/login/index.html', 'js/login.js');
    },

    /**
    * Initialisation de l'application : Récupération des datas
    *
    **/
    initApp : () => {
        app.main.loadingPage();
      // Récupérer toutes les données PUIS générer le DOM et le remplir
        var waitingData = [];
        // Récupération des utilisateurs
        app.main.getData('user');
        // Récupération des groupes
        app.main.getData('group');
        // Récupération des events
        app.main.getData('event');
        // Récupération des devices
        app.main.getData('device');
        // Récupération des caméras
        app.main.getData('camera');

      //  while( app.main.nbDatas != 5 ) {};




    },

    getData : (route) => {
        console.log(' >> get data : ' + route);
        app.api.get(route, app.main.saveData, sessionStorage.getItem('token'), app.main.replayAPI)
    },

    saveData : (datas) => {
        console.log(' >> Save data');
        app.main.datas.push(datas);
        app.main.nbDatas++;
        console.log(app.main.datas);
        console.log(app.main.nbDatas);
    },

    replayAPI : () => {
        console.log("----- Replay API -----");
    },

    initNavbar : () => {
        $(document).on('click', '.nav-link', function() {
            var el = $(this).attr('id');
            if( !$(this).hasClass('active') ) {
                $('.active').removeClass('active');
                $(this).addClass('active');
                sessionStorage.setItem('page', el);
                app.main.navigate(el);
            }
        });
    },

    loadingPage : () => {
        var container = $("#container");
        var viewPath = 'html/loadingPage.html';
        app.main.loadView(container, viewPath);
    },

    loadView : ( container, viewPath, scriptPath ) => {
        if( scriptPath !== undefined )
            $.getScript(scriptPath)

        container.hide().load(viewPath).show();

    }
    /*
    checkLogin : ( ) => {
          app.api.get('', app.main.initApp, sessionStorage.getItem('token'), app.main.login );
    },

    login : () => {
        var page = 'login';
        sessionStorage.setItem('page', page);
        app.main.navigate(page)
    },

    initApp : () => {
        app.main.loadScript();
    },

    loadScript : () => {
        console.log(app.main.routes);
        for( i in app.main.routes ) {
            $.getScript('js/' + app.main.routes[i] + '.js')
            //app.api.get(app.main.routes[i], app.main.fillData, sessionStorage.getItem('token'), app.main.fillData);
        }
        app.main.initSession();
    },

    initSession : () => {
        var page = app.main.getCurrentNav();
        if( sessionStorage.getItem('page') != page) {
          sessionStorage.setItem('page', page);
        }
        $(document).ready(function() {
            $('#wrapper').toggleClass("toggled");
        });

        app.main.navigate(page || 'home');
    },

    initNavbar : () => {
        $(document).on('click', '.nav-link', function() {
            var el = $(this).attr('id');
            if( !$(this).hasClass('active') ) {
                $('.active').removeClass('active');
                $(this).addClass('active');
                sessionStorage.setItem('page', el);
                app.main.navigate(el);
            }
        });
    },

    navigate : (link, div) => {
        if( div === undefined )
            div = $("#container");

        app.main.loadHtml(div, 'html/' + link + '/index.html')

    },

    create : (child, parent) => {

        $('#section-'+child).hide().load('html/' + child +'/overlay/list-'+ child + '.html').show();
        $.getScript('js/' + child + '.js');
    },

    loadHtml : (container, contentPath, script) => {
        container.hide().load(contentPath).show()

        if( script !== undefined ) {
            $.getScript('js/' + script + '.js');
        }


    },

    getCurrentNav : () => {
        return $(".navbar-link .active").attr('id');
    }*/
};

app.main.init();
