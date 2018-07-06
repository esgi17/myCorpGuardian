var app = app || {};

app.users = {
    datas : [],

    init : () => {
        app.users.loadDatas();
        app.users.actionHandler();
        if( sessionStorage.getItem('page') == 'users') {
            app.users.loadMainUser();
            console.log("0");
        } else {
            app.users.displayUsers();
        }

        // app.api.get('user', app.users.displayUsers, sessionStorage.getItem('token'), app.users.displayUsers);
        // app.api.get('group', app.users.displayGroups, sessionStorage.getItem('token'), app.users.displayGroups);
        console.log('Appel script : users.js');
    },

    loadDatas : (res) => {
        if( res === undefined) {
            app.api.get('user', app.users.loadDatas, sessionStorage.getItem('token'), app.users.loadDatas);
            app.users.datas = [];
        } else {
            app.users.datas.push(res.datas[0]);
        }
    },

    displayUsers : () => {
        var users = app.users.datas;
        if( users === undefined ) {
            // Display erreur
        } else {
          if( $("#list-users") ) {
              console.log(users.length);
              console.log(users);
              for( var user in users) {
                  console.log("RGRIJ");
                  console.log(users[user]);
                  $('#list-users').append('<tr><td>' + users[user].firstname + '</td><td>' + users[user].lastname + '</td><td>' + users[user].job + ' </td><td><img class="action detail-user-action" alt="detail icon" src="Medias/images/detail.png"></td></tr>');
              }
          } else {
              console.log("chiant");
              app.users.loadMainUser();
          }
        }

    },

    displayGroups : (groups) => {
        if( groups === undefined ) {
            // Display erreur
        } else {
            for( group in groups['datas']) {
                $('#list-group').append('<tr><td>' + groups['datas'][group].id + '</td><td>' + groups['datas'][group].name + '</td></tr>');
            }
        }
    },

    loadMainUser : () => {
        app.main.loadHtml($("#section-list-user"), 'html/users/overlay/list-users.html');
        app.main.loadHtml($("#section-list-group"), 'html/users/overlay/list-group.html');
    },

    actionHandler : () => {
        $(document).on("click",".detail-user-action", function() {
            if( sessionStorage.getItem('page') !== 'users' ) {
                app.main.navigate('users');
                sessionStorage.setItem('detail-user')
            } else {

            }
        });
    }


}

app.users.init();
