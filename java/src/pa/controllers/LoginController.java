package pa.controllers;

import javafx.fxml.FXML;
import javafx.scene.control.PasswordField;
import javafx.scene.control.TextField;
import org.json.JSONObject;
import pa.Models.Api;
import pa.Models.HttpURLConnectionExample;

import java.io.InputStream;
import java.net.URISyntaxException;
import java.net.URL;
import java.net.URLConnection;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;


public class LoginController {
    @FXML TextField login;
    @FXML PasswordField password;


    public void authenticate() throws Exception {

    }

    public void connect() throws Exception {

        JSONObject body = new JSONObject();
        body.put("login", login.getText());
        body.put("password", password.getText());

        JSONObject res = new JSONObject();
        res = Api.callAPI("POST", "admin/a", body);
        System.out.println(res.toString());
    }
}
