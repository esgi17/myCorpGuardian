package pa.controllers;

import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.ListView;

import java.io.IOException;

public class HomeController {
    @FXML ListView usersList;
    ObservableList<String> users = FXCollections.observableArrayList();


    public void fillUsersList() {
        usersList.getItems().clear();
        users.addAll(
                "Adam", "Alex", "Alfred", "Albert",
                "Brenda", "Connie", "Derek", "Donny",
                "Lynne", "Myrtle", "Rose", "Rudolph",
                "Tony", "Trudy", "Williams", "Zach"
        );
        usersList.setItems(users);
    }

    public void addUser() throws IOException {
    }
}
