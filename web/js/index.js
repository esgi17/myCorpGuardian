var app = app || {};

app.main = {

    appName : 'My Corp Guardian',

    api : 'http://127.0.0.1:3000/',

    version : '1.0',

    init : () => {
        console.log("init app");
        app.main.checkLogin();
        // app.main.initSession();
        // app.main.initNavbar();
        //

        // app.main.navigate('home');
    },

    checkLogin : ( ) => {
          console.log('Check Login ...');
          app.api.get('', app.main.initSession, sessionStorage.getItem('token'), app.main.login );
    },

    login : () => {
        var page = 'login';
        sessionStorage.setItem('page', page);
        console.log(page);
        app.main.navigate(page)
    },

    initSession : () => {
        console.log('init session...');
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

                app.main.navigate(el);
            }
        });
    },

    navigate : (link, div) => {
        console.log(link);
        if( div === undefined )
            div = $("#container");

        app.main.loadHtml(div, 'html/' + link + '/index.html', link)

    },

    create : (child, parent) => {
        console.log(parent);
        parent.append('<div id="section-'+child+'"></div>');
        $('#section-'+child).hide().load('html/'+ child + '/index.html').show();
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
    },
};

app.main.init();
