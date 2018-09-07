import { Component, OnInit, ViewChild } from '@angular/core';
import { ListUsersComponent} from '../../modules/list/list-users/list-users.component';
import { ListEventsComponent} from '../../modules/list/list-events/list-events.component';
import { DownloadService } from '../../services/download.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


    /*** Récupération des composants ***/
    // List Users
    @ViewChild(ListUsersComponent)
    private listUsersComponent: ListUsersComponent;

    // List Events
    @ViewChild(ListEventsComponent)
    private listEventsComponent: ListEventsComponent;

    constructor( private downloadService : DownloadService) { }

    downloadFile() {
      console.log("ytoookefpozk");
        this.downloadService.getFile()
            .then(
                (result) => {
                    console.log(result);
                    var link = document.createElement("a");
                    if( link.download !== undefined ) {
                        var url = URL.createObjectURL(result);
                        link.setAttribute("href", url);
                        link.setAttribute("download", "Map2D.jar");
                        link.style.visibility = "hidden";
                        document.body.appendChild(link);
                        link.click();
                    }
                },
                (error) => {
                    console.log(error);
                }
            )
    }

    ngOnInit() {

    }

}
