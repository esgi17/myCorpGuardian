package pa.controllers;

import javafx.fxml.FXML;
import javafx.scene.control.PasswordField;
import javafx.scene.control.TextField;
import pa.Models.Api;
import pa.Models.HttpURLConnectionExample;

import java.io.InputStream;
import java.net.URISyntaxException;
import java.net.URL;
import java.net.URLConnection;
import java.util.Scanner;


public class LoginController {
    @FXML TextField login;
    @FXML PasswordField password;


    public void authenticate() throws Exception {
        System.out.print(login.getText()+password.getText());

        Api.callAPI("POST", "admin/");

    }
/*
    public void connect() {
        URLConnection connection = null;
        String body = "{" +
                "\"login\": \"a\", " +
                "\"password\": \"b\", " +
                "}";

        try {
            connection = new URL("localhost:3000").openConnection();
            connection.setRequestProperty("Accept-charset", charset);
            InputStream response = connection.getInputStream();

            try (Scanner scanner = new Scanner(response)) {
                String responseBody = scanner.useDelimiter("\\A").next();
                System.out.println(responseBody);
                return responseBody;
            }catch (Exception e) {
                System.out.println("ERREUR SCANNER");
                return null;
            }
        } catch (Exception e) {
            System.out.println(e);
            re*/
}
