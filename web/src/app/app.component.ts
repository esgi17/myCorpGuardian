import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';

    constructor( private authService: AuthService, private router: Router) {

        this.authService.checkLogin()
            .then(
                (data) => {
                    if( sessionStorage.getItem('isAdmin') == "1" ) {

                        this.router.navigate(['/admin']);
                    } else {
                          this.router.navigate(['/home']);
                    }
                },
                (error) => {
                    console.error(error);
                    this.router.navigate(['/login']);
                }
            )
    }

    isLogged() {
        if( sessionStorage.getItem('isLogged') != "1" ) {
            return false;
        }
        return true;;
    }

    ngOnInit() {
        if( sessionStorage.getItem('isAdmin') == "1" && this.router.url != '/admin') {
            this.router.navigate(['/admin'])
        }
    }

}
