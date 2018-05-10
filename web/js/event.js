$(document).ready(function() {

    $('#list-users').ready(function() {
        // Lorsque le DOM est pret, on interroge l'API
        //const users = app.api.get('user');
        var users = {
            0 : {
                surname : "Robin",
                lastname: "Tersou",
                isManager: 1
            },
            1 : {
                surname : "Antoine",
                lastname : "Cheval",
                isManager : 0
            }
        }
        console.log(users);
        for(user in users) {
          console.log(users[user]);
          $('#list-users').append('<li>' + users[user].surname + ' ' + users[user].lastname + ' - ' + users[user].isManager + ' </li>');
        }
    });
});
