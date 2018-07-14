import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users:Array<Object>;
  res:Object;
  constructor( private usersService : UsersService ) { }

  getUsers() {
      return this.users;
  }

  getAll() {
      this.usersService.getAll().then(
          (result) => {
              this.res = <Object>result;
              this.users = this.res.datas;
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

  ngOnInit() {
      this.getAll()
  }

}
