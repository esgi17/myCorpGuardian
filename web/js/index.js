var app = app || {};

app.main = {

    appName : 'My Corp Guardian',

    api : 'http://127.0.0.1:9090/',

    version : '1.0',

    init : () => {

        app.main.initSession();
        app.main.initNavbar();

        $(document).ready(function() {
            $('#wrapper').toggleClass("toggled");
        });
        app.main.navigate('home');
    },

    initSession : () => {
        var page = app.main.getCurrentNav();
        if( sessionStorage.getItem('page') != page) {
          sessionStorage.setItem('page', page);
        }
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
        if( div === undefined )
            div = $("#container");
            console.log("1");

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
