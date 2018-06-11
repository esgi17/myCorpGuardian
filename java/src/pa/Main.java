package pa;

import pa.controllers.ApiController;
import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.stage.Stage;

import java.io.IOException;

public class Main extends Application {
    private Stage primaryStage;

    public void start(Stage primaryStage) throws Exception{
        this.primaryStage = primaryStage;
        this.primaryStage.setTitle("My Corp Guardian");

        initApp();

        /*
        Parent root = FXMLLoader.load(getClass().getResource("sample.fxml"));
        primaryStage.setTitle("Hello World");
        primaryStage.setScene(new Scene(root, 300, 275));
        primaryStage.show();
        */
    }

    private void initApp() throws IOException {
        System.out.println("App initializing..."); // LOG
        if( checkLogin() ) {
            // Connect
            Parent root = FXMLLoader.load(getClass().getResource("View/home.fxml"));
            primaryStage.setTitle("My Corp Guardian - HOME");
            primaryStage.setScene(new Scene(root, 800, 700));
            primaryStage.show();
        } else {
            Parent root = FXMLLoader.load(getClass().getResource("View/login.fxml"));
            primaryStage.setTitle("My Corp Guardian - Login");
            primaryStage.setScene(new Scene(root, 600, 400));
            primaryStage.show();
        }
    }


    private boolean checkLogin() {
        if( getToken() == null || getToken().isEmpty() ) {
            return false;
        }
        return true;

    }

    public static void main(String[] args) {
        launch(args);
    }
}
