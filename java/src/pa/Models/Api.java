package pa.Models;


import javax.net.ssl.HttpsURLConnection;
import java.io.*;
import java.net.*;
import java.util.Scanner;

public class Api {

    private static String api_url = "http://127.0.0.1:3000/";

    private static String charset = "UTF-8";

    private static String token;

    public static void main(String[] args) throws IOException {

    }

    public static String callAPI(String method, String route) throws Exception {
        HttpURLConnectionExample http = new HttpURLConnectionExample();
        String url = api_url + route;

        switch( method ) {
            case "GET" :
                Api.get(url);
                break;
            case "POST" :
                Api.post(url);
                break;
            default : System.out.println("ERROR");
        }


        return "";
    }
    public static void get(String url) throws Exception {

        URL obj = new URL(url);
        HttpURLConnection con = (HttpURLConnection) obj.openConnection();

        con.setRequestMethod("GET");

        int responseCode = con.getResponseCode();
        System.out.println("\nSending 'GET' request to URL : " + url);
        System.out.println("Response Code : " + responseCode);

        BufferedReader in = new BufferedReader(
                new InputStreamReader(con.getInputStream()));
        String inputLine;
        StringBuffer response = new StringBuffer();

        while ((inputLine = in.readLine()) != null) {
            response.append(inputLine);
        }
        in.close();

        //print result
        System.out.println(response.toString());

    }
    // HTTP POST request
    public static void post(String url) throws Exception {

        URL obj = new URL(url);
        HttpURLConnection con = (HttpURLConnection) obj.openConnection();

        String urlParameters = "parametres a foutre en json";

        // Send post request
        con.setDoOutput(true);
        DataOutputStream wr = new DataOutputStream(con.getOutputStream());
        wr.writeBytes(urlParameters);
        wr.flush();
        wr.close();

        int responseCode = con.getResponseCode();
        System.out.println("\nSending 'POST' request to URL : " + url);
        System.out.println("Post parameters : " + urlParameters);
        System.out.println("Response Code : " + responseCode);

        BufferedReader in = new BufferedReader(
                new InputStreamReader(con.getInputStream()));
        String inputLine;
        StringBuffer response = new StringBuffer();

        while ((inputLine = in.readLine()) != null) {
            response.append(inputLine);
        }
        in.close();

        //print result
        System.out.println(response.toString());

    }



    public static Boolean checkToken() {
        // Verification Token API

        try{
            callAPI("GET", "/");
            return true;
        }catch (Exception e) {
            return false;
        }
    }

    public static String getApi_url() {
        return api_url;
    }

    public static void setApi_url(String api_url) {
        Api.api_url = api_url;
    }

    public static String getToken() {
        return token;
    }


    public static void setToken(String token) {
        Api.token = token;
    }
}
