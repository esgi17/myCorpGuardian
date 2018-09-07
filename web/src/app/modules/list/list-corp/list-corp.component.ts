import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'
import { AdminService } from '../../../services/admin.service';
import { UserService } from '../../../services/user.service';
import { PluginService } from '../../../services/plugin.service';
import { NgbModule, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-corp',
  templateUrl: './list-corp.component.html',
  styleUrls: ['./list-corp.component.css']
})
export class ListCorpComponent implements OnInit {
    corps: Array<Object>;
    users: Array<Object>;
    selectedCorp: Object;
    modifyName = false;
    modifyUrl = false;
    modifyDbName = false;
    modifyDbLogin = false;
    modifyDbPassword = false;
    closeResult: string;

    @Output() editCorp = new EventEmitter<Object>();
    @Output() createCorp = new EventEmitter<Boolean>();
    @Output() activeCorp = new EventEmitter<Object>();
    @Output() managePlugin = new EventEmitter<Object>();

    constructor( private adminService: AdminService, private modalService: NgbModal, private userService: UserService, private pluginService: PluginService, private router : Router) { }


    getStyle() {
        switch( this.router.url ) {
            case '/admin' :
                return 'full_height'
        }
    }

    isSelected(id) {
        console.log("CORP ID : " + id)
        var res = <any>{};
        res = this.selectedCorp;
        if( res !== undefined && res.id == id ){
            console.log("apapapapa");
            return true;
        }
        console.log("zefzefz");
        return false;
    }


    selectActiveCorp(corp) {
        this.selectedCorp = corp;
        this.loadCorpUsers()
            .then(
                (result) => {
                    console.log(result);
                    var res = <any>{}
                    res = this.selectedCorp;
                    res.users = result;
                    this.activeCorp.emit(res);
                },
                (error) => {
                    this.activeCorp.emit(corp);
                }
            )
    }

    loadCorpUsers() {
        return new Promise(
            (resolve, reject) => {
                var corp = <any>{};
                corp = this.selectedCorp;
                this.adminService.getUsersFromCorp(corp.id)
                    .then(
                        (result) => {
                            var res = <any>{};
                            res = result;
                            var users =  <Array<Object>>Object.keys(res.datas).map( key => res.datas[key]);
                            resolve(users);
                        },
                        (error) => {
                            console.log(error);
                            reject(error);
                        }
                    )
                    .catch( (err) => {
                        console.log(err);
                        reject(err);
                    })
            }
        )
    }

    getAll() {
        var res = <any>{};
        console.log(sessionStorage.getItem('token'));
        this.adminService.getAllCorps()
            .then(
                (result) => {
                      res = result;
                      this.corps = <Array<Object>>Object.keys(res.datas).map( key => res.datas[key]);
                 },
                 (error) => {
                     console.log(error);
                 }
            ).catch(
                (error) => {
                    console.log(error);
                }
            )
    }

    deleteCorp(corp) {
        if( confirm('Are you sure you want de delete this Corp ? ' + corp.name)) {
            this.adminService.deleteCorp(corp.id)
                .then( (result) => {
                    alert(corp.name + "has been deleted");
                    this.ngOnInit();
                })
                .catch( (err) => {
                    console.log(err);
                });
        }
    }

    createCorpModal() {
        console.log("Create Corp");
        this.createCorp.emit(true);
    }

    modifyCorp(corp) {
        this.selectedCorp = corp;
        this.editCorp.emit(corp);
    }


    addUserCorp(corp) {
        console.log(corp)
        this.selectActiveCorp(corp)
    }

    managePlugins(corp) {
        var tmpPlugins = Array<Object>();
        this.pluginService.getAll()
            .then(
                (plugin) => {
                    var res = <any>{};
                    res = plugin;
                    tmpPlugins = <Array<Object>>Object.keys(res.datas).map( key => res.datas[key]);
                    this.managePlugin.emit({plugins : tmpPlugins, corp : corp});
                },
                (error) => {
                    console.log(error);
                }
            )
            .catch( (err) => {
                console.log(err);
            })
    }

    ngOnInit() {
        this.getAll();
    }

    modifyNamee() {
        console.log("yo");
        this.modifyName=true;
    }


}
