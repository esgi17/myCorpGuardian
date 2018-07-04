package pa;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.stage.Stage;
import pa.Models.Api;

import java.io.IOException;

import static pa.Models.Api.checkToken;
import static pa.Models.Api.getToken;


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
            openHomePage();

        } else {
            openLoginPage();
        }
    }


    private boolean checkLogin() {
        if( getToken() == null || getToken().isEmpty() ) {
            System.out.println("No token provided...");
            return false;
        } else {
            if( !checkToken() ) {
                System.out.println("Bad token provided...");
                return false;
            }
        }
        System.out.println("Token ok! ");
        return true;

    }

    public static void main(String[] args) {
        launch(args);
    }

    public void openLoginPage() throws IOException {
        Parent root = FXMLLoader.load(getClass().getResource("View/login.fxml"));
        primaryStage.setTitle("My Corp Guardian - Login");
        primaryStage.setScene(new Scene(root, 600, 400));
        primaryStage.show();
    }

    public void openHomePage() throws IOException {
        Parent root = FXMLLoader.load(getClass().getResource("View/home.fxml"));
        primaryStage.setTitle("My Corp Guardian - HOME");
        primaryStage.setScene(new Scene(root, 600, 400));
        primaryStage.show();
    }

    public void openAddUserPage() throws IOException {
        Parent root = FXMLLoader.load(getClass().getResource("View/addUser.fxml"));
        primaryStage.setTitle("My Corp Guardian - Add User");
        primaryStage.setScene(new Scene(root, 600, 400));
        primaryStage.show();
    }
}
