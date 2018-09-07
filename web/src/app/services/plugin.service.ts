import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PluginService {

    constructor(private apiService: ApiService) { }

    getAll() {
        return new Promise(
            (resolve, reject) => {
                this.apiService.get("plugin")
                    .then(
                        (result) => {
                            resolve(result)
                        },
                        (error) => {
                            reject(error);
                        }
                    )
                    .catch ( (err) => {
                        console.log(err);
                        reject(err);
                    })
            }
        )
    }

    getRight(plugin_id, activeCorp_id, id) {
        return new Promise(
            (resolve, reject) => {
                this.apiService.get("pluginAssociation")
                    .then(
                        (result) => {
                            resolve(result)
                        },
                        (error) => {
                            reject(error);
                        }
                    )
                    .catch( (err) => {
                        reject(err);
                    })
            }
        )
    }
}
