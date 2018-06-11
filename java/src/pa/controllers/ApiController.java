package pa.controllers;

import java.io.BufferedReader;
import java.io.IOException;

public class ApiController {

    private static String api_url;

    private static String token;

    public static void main(String[] args) throws  IOException {
    }

    public Boolean callAPI(String method, String route) {
        return true;
    }

    public static String getApi_url() {
        return api_url;
    }

    public static void setApi_url(String api_url) {
        ApiController.api_url = api_url;
    }

    public static String getToken() {
        return token;
    }

    public static void setToken(String token) {
        ApiController.token = token;
    }
}
