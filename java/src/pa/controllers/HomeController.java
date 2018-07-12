package pa.controllers;

import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.stage.Stage;
import org.json.JSONArray;
import org.json.JSONObject;
import pa.Main;
import pa.Models.Api;
import pa.Models.NavHandler;
import pa.Models.User;

import java.io.IOException;

public class HomeController {
    @FXML ListView usersList;
    @FXML ComboBox listGroup;
    @FXML TextField firstname;
    @FXML TextField lastname;
    @FXML TextField job;
    @FXML Label labelFirstname;
    @FXML Label labelLastname;
    @FXML Label head;
    @FXML Button addBtn;

    ObservableList<String> users = FXCollections.observableArrayList();
    ObservableList<String> groups = FXCollections.observableArrayList();

    public void fillUserList() throws Exception {
        User res[] = getUsers();
        usersList.getItems().clear();
        // Rempli le tableau de users
        for(int i=0 ; i<res.length ; i++ ){
            users.add(userCreateLine(res[i]));
        }
        usersList.setItems(users);
    }


    public User[] getUsers() throws Exception {
        JSONObject empty = new JSONObject();

        // Recupere resultat requete
        String json = Api.callAPI("GET", "user/", empty);
        JSONObject datas = new JSONObject(json);
        JSONArray jArray = new JSONArray(datas.getString("datas"));
        User[] users = new User[jArray.length()];

        //Met les noms des users dans un tableau de String
        for (int i = 0; i < jArray.length(); i++) {
            JSONObject user = jArray.getJSONObject( i );
            users[i] = new User();
            users[i].setId(user.getString("id"));
            users[i].setFirstname(user.getString("firstname"));
            users[i].setLastname(user.getString("lastname"));
            users[i].setIdGroup(getGroupName(user.getString("group_id")));
        }

        return users;
    }

    public String getGroupName(String id) throws Exception {
        JSONObject empty = new JSONObject();
        String json = "";

        // Recupere resultat requete
        String str = Api.callAPI("GET", "group/" + id, empty);
        JSONArray jArray = new JSONArray(str);
        JSONObject res = jArray.getJSONObject(0);

        return res.getString("name");
    }

    public String userCreateLine(User user){
        return user.getLastname() + ", " + user.getFirstname();
    }


    //ADD user
    public void fillGroupList() throws Exception {
        listGroup.getItems().clear();
        groups.addAll(getGroups());
        listGroup.setItems(groups);
    }

    public String[] getGroups() throws Exception {
        JSONObject empty = new JSONObject();
        String json = "";

        // Recupere resultat requete
        json = Api.callAPI("GET", "group/", empty);
        JSONArray jArray = new JSONArray(json);
        String res[] = new String[jArray.length()];

        //Met les noms de groupe dans un tableau de String
        for (int i = 0; i < jArray.length(); i++) {
            JSONObject group = jArray.getJSONObject( i );
            res[i] = group.getString("id") + " : " + group.getString("name");
        }

        return res;
    }

    public boolean addUser() throws Exception {
        // Verif si champ vide
        if (firstname.getText().equalsIgnoreCase( "" )) {
            labelFirstname.setText("Empty Firstname");
            return false;
        } else if (lastname.getText().equalsIgnoreCase( "" )) {
            labelLastname.setText( "Empty Lastname");
            return false;
        } else {

            //Creation json user
            JSONObject body = new JSONObject();
            body.put( "firstname", firstname.getText() );
            body.put( "lastname", lastname.getText() );
            body.put( "job", job.getText() );
            // Recuperation de l'id du groupe
            if (listGroup.getValue() != null) {
                String groupId = listGroup.getValue().toString().substring( 0, listGroup.getValue().toString().indexOf( " " ) );
                body.put( "group_id", groupId );
            } else {
                body.put( "group_id", "0" );
            }
            String res = Api.callAPI( "POST", "user/", body );
            JSONObject apiReturn = new JSONObject( res );

            //Raz champs
            labelFirstname.setText("Firstname");
            labelLastname.setText( "Lastname");
            firstname.setText("");
            lastname.setText("");
            job.setText("");
            fillUserList();

            if (apiReturn.getString( "success" ) == "true") {
                return true;
            } else {
                System.out.println( apiReturn.toString() );
                return false;
            }
        }
    }

    //Modifier user
    public void modifUser(){
        head.setText("User");
        addBtn.setText("Modify User");
    }
}
