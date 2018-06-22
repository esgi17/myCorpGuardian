package pa.controllers;

import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.fxml.FXML;
import javafx.scene.control.ComboBox;

public class AddUserController {
    @FXML ComboBox listGroup;
    ObservableList<String> groups = FXCollections.observableArrayList();
}
