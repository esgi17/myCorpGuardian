import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor( private apiService: ApiService ) { }

  getFile() {
      return new Promise(
          (resolve, reject) => {
              this.apiService.get("download")
                  .then(
                      (result) => {
                          resolve(result);
                      },
                      (error) => {
                          reject(error);
                      }
                  )
          }
      )
  }
}
