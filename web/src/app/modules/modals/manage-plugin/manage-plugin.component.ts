import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { PluginService } from '../../../services/plugin.service';
import {MatCheckboxModule} from '@angular/material/checkbox';
@Component({
  selector: 'app-manage-plugin',
  templateUrl: './manage-plugin.component.html',
  styleUrls: ['./manage-plugin.component.css']
})
export class ManagePluginComponent implements OnInit {
    //plugins: Array<Object>;
    editPluginsForm: FormGroup;
    @Input() activeCorp: {};
    @Input() plugins: {};
    constructor( private pluginService : PluginService, private formBuilder: FormBuilder ) {
        console.log("*************************");
        this.initForm();
    }

    initForm() {
      this.editPluginsForm = this.formBuilder.group({
          active : undefined
      })
    }

    getAllPlugins() {
        var res = <any>{};
        this.pluginService.getAll()
            .then(
                (result) => {
                    res = result;
                    this.plugins = <Array<Object>>Object.keys(res.datas).map( key => res.datas[key]);
                    console.log(this.plugins);
                },
                (error) => {
                    console.log(error);
                }
            ).catch( (err) => {
                console.log(err);
            })

    }

    changeRight($event,plugin) {
        console.log($event.checked);
        //this.pluginService.changeRight
    }

    hasRight(plugin) {
        var res = <any>{};
        console.log(this.activeCorp)
        /*this.pluginService.getRight(plugin.id, this.activeCorp.id, null)
            .then(
                (result) => {
                    console.log(result);
                    return true;
                },
                (error) => {
                    console.log(error);
                }
            )
            .catch( (err) => {
                console.error(err);
            })*/
    }
    submit() {
      /*  const active = this.editPluginsForm.get("active").value;
        console.log(active);
        const datas = {
            right : active,
            corp_id : this.activeCorp.id,
            plugin_id : this.
        }*/
    }

    ngOnInit() {
        this.getAllPlugins();
    }

}
