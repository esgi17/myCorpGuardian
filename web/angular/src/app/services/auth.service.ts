import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    isLogged:boolean;
    constructor(private httpClient: HttpClient, private router : Router) { };

    /**
    * Récupération du token
    */
    getToken() {
      //  return sessionStorage.getItem('token');
        return sessionStorage.getItem('token');
    };

    login( datas ) {
      return new Promise(
          (resolve, reject) => {
              const options = {
                 headers: {
                     'Content-Type': 'application/x-www-form-urlencoded',
                     'Access-Control-Allow-Origin': '*'
                 }
              };
              console.log(datas);
              this.httpClient.post("http://localhost:3000/", datas).subscribe(
                  (data) => {
                      //sessionStorage.setItem('logged', 1)
                      resolve(data);
                      //return true
                  },
                  (error) => {
                      //sessionStorage.setItem('logged', 0)
                      //console.log(error);
                      reject(error);
                      //return false
                  }
              )
          }
      )
    }
    /**
    * Verification de la connexion
    */
    checkLogin() {
        return new Promise(
            (resolve, reject) => {
                const options = {
                   headers: {
                       'Content-Type': 'application/x-www-form-urlencoded',
                       'Authorization': this.getToken(),
                       'Access-Control-Allow-Origin': '*'
                   }
                };
                this.httpClient.post("http://localhost:3000/check", null, options).subscribe(
                    (data) => {
                        console.log("zfiuhjfeziuhfezauoyhgfazeouihfezuoygfezauogyfzeaiuyg");
                        //sessionStorage.setItem('logged', 1)
                        resolve(1);
                        //return true
                    },
                    (error) => {
                        //sessionStorage.setItem('logged', 0)
                        //console.log(error);
                        reject(error);
                        //return false
                    }
                )
            }
        )
        //const options.headers = {"test":"test"}
        //let headers = new HttpHeaders().set('x-access-token', token);
        //console.log(options);

    }
}
