var app = app || {};

app.users = {
    init : () => {
        console.log('user loaded');
        app.api.get('user', app.users.displayUsers, sessionStorage.getItem('token'), app.users.displayUsers);
    },

    displayUsers : (users) => {
      if( users === undefined ) {
          // Display erreur
      } else {
        console.log(users['datas']);
        for( user in users['datas']) {
            console.log(users['datas'][user]);
            $('#list-users').append('<tr><td>' + users['datas'][user].firstname + '</td><td>' + users['datas'][user].lastname + '</td><td>' + users['datas'][user].job + '</td></tr>');
        }
        // for(user in users) {
        //   console.log(users[user]);
        //   $('#list-users').append('<tr><td>' + users[user].surname + '</td><td>' + users[user].name + '</td><td>' + users[user].job + '</td><td>' + users[user].isManager+ '</td></tr>');
        // }
      }
    }

}

app.users.init();
