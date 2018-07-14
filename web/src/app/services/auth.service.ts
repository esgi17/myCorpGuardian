import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    isLogged:boolean;
    contentType:string;
    accessControlAllowOrigin:string;
    constructor(private httpClient: HttpClient) { };

    /**
    * Récupération du token
    */
    getToken() {
        return localStorage.getItem('token');
    }

    setToken(token: string) {
        localStorage.setItem('token', token);
    }

    /**
    * Authentification
    **/
    login( datas ) {
      return new Promise(
          (resolve, reject) => {
              const options = {
                 headers: {
                     'Content-Type': 'application/x-www-form-urlencoded',
                     'Access-Control-Allow-Origin': '*'
                 }
              };
              this.httpClient.post("http://localhost:3000/", datas).subscribe(
                  (data) => {
                      this.setToken(data.token);
                      localStorage.setItem('isLogged', "1")
                      resolve(data);
                  },
                  (error) => {
                      localStorage.setItem('isLogged', "0")
                      this.isLogged = false;
                      reject(error);
                  }
              )
          }
      )
    }

    logout() {
      localStorage.setItem('isLogged', "0");
      localStorage.setItem('token', '');
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
                        resolve(1);
                    },
                    (error) => {
                        reject(error);
                    }
                )
            }
        )
    }
}
