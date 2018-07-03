var app = app || {};

app.users = {
    init : () => {
        console.log('Appel script : users.js');
        app.api.get('user', app.users.displayUsers, sessionStorage.getItem('token'), app.users.displayUsers);
    },

    displayUsers : (users) => {
      if( users === undefined ) {
          // Display erreur
      } else {
        for( user in users['datas']) {
            $('#list-users').append('<tr><td>' + users['datas'][user].firstname + '</td><td>' + users['datas'][user].lastname + '</td><td>' + users['datas'][user].job + '</td></tr>');
        }
      }
    }

}

app.users.init();
