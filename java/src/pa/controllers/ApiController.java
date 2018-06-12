package pa.controllers;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.net.*;
import java.util.Scanner;

public class ApiController {

    private static String api_url = "http://127.0.0.1:3000/";

    private static String charset = "UTF-8";

    private static String token;

    public static void main(String[] args) throws IOException {

    }

    public Boolean callAPI(String method, String route, String[] datas) throws UnsupportedEncodingException {
        URLConnection connection = null;
        String query = String.format("param1=%s", URLEncoder.encode(token, charset));

        try {
            connection = new URL(api_url + route + "?" + query).openConnection();
            connection.setRequestProperty("Accept-charset", charset);
            InputStream response = connection.getInputStream();

            try (Scanner scanner = new Scanner(response)) {
                String responseBody = scanner.useDelimiter("\\A").next();
                System.out.println(responseBody);
            }catch (Exception e) {

            }
        } catch (Exception e) {

        }
        //Integer i;

        /*for( String data : datas ) {
            query += "param"
        }*/

        try {
            URL url = new URL(api_url);
            connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod(method);
            connection.setRequestProperty("Content-Type", "applicatoin/x-www-form-urlencoded");
        }catch( Exception e) {

        }
        // APPEL API


        return true;
    }


    public static Boolean checkToken() {
        // Verification Token API

        return false;
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
