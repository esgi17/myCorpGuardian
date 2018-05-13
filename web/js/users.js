var app = app || {};

app.users = {
    init : () => {
        console.log('user loaded');
        app.api.get('user', app.users.displayUsers);
    },

    displayUsers : (users) => {
      if( users === undefined ) {
          // Display erreur
      } else {
        console.log(users);
        for(user in users) {
          $('#list-users').append('<tr><td>' + users[user].surname + '</td><td>' + users[user].name + '</td><td>' + users[user].job + '</td><td>' + users[user].isManager+ '</td></tr>');
        }
      }
    }

}

app.users.init();
