import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    headers : {};
    token: String;
    api = "http://localhost:3000/";
    constructor( private httpClient : HttpClient ) {
        this.setHeaders()
    }

    getToken() {
      console.log(sessionStorage.getItem('token'));
        return sessionStorage.getItem('token');
    }

    setToken(token) {
        sessionStorage.setItem('token', token);
    }

    getHeaders() {

        return this.headers;
    }

    setHeaders() {
        this.headers = {
          'Authorization' : `${this.getToken()}`,
          'Access-Control-Allow-Origin': '*'
        }
    }

    get( route:string ) {
        console.log(this.api + route);
        console.log(this.getHeaders());
        return new Promise(
            (resolve, reject) => {
                var options = {
                    headers : {
                        'Authorization' : sessionStorage.getItem('token') || '',
                        'Access-Control-Allow-Origin': '*'
                    }
                }
                this.httpClient.get(this.api + route, options).subscribe(
                    (data) => {
                        console.log(data);
                        resolve(data);
                    },
                    (error) => {
                        console.log(error);
                        reject(error);
                    }
                )
            }
        )
    }

    post( route:string, datas:Object) {
        return new Promise(
            (resolve, reject) => {
                var options = {
                  headers : {
                      'Authorization' : sessionStorage.getItem('token') || '',
                      'Access-Control-Allow-Origin': '*'
                  }
                }
                console.log(options);
                this.httpClient.post(this.api + route, datas, options).subscribe(
                    (data) => {
                        resolve(data);
                    },
                    (error) => {
                        reject(error);
                    }
                )
            }
        )
    }

    put( route: string, datas: Object) {
        return new Promise(
            (resolve, reject) => {
                var options = {
                  headers : {
                      'Authorization' : sessionStorage.getItem('token'),
                      'Access-Control-Allow-Origin': '*'
                  }
                }
                this.httpClient.put(this.api + route, datas, options).subscribe(
                    (data) => {
                        resolve(data);
                    },
                    (error) => {
                        console.log(error);
                        reject(error)
                    }

                )
            }
        )
    }

    delete( route : string ) {
        return new Promise(
            (resolve, reject) => {
                var options = {
                  headers : {
                      'Authorization' : sessionStorage.getItem('token') || '',
                      'Access-Control-Allow-Origin': '*'
                  }
                }
                this.httpClient.delete(this.api + route, options)
                    .subscribe(
                        (data) => {
                            resolve(data);
                        },
                        (error) => {
                            console.log(error);
                            reject(error);
                        }
                    )
            }
        )
    }
}
