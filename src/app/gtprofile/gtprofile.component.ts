import { Component, OnInit } from "@angular/core";
import { GtsearchService } from "../gtsearch.service";
import { Observable, fromEvent, merge, of } from "rxjs";
import { mapTo } from "rxjs/operators";
@Component({
  selector: "app-gtprofile",
  templateUrl: "./gtprofile.component.html",
  styleUrls: ["./gtprofile.component.css"]
})
export class GtprofileComponent implements OnInit {
  online$: Observable<boolean>;
  status: string;
  isConnected = true;
  details: any;
  repos: any;
  loading = false;

  constructor(private gtsearchservice: GtsearchService) {
    this.online$ = merge(
      of(navigator.onLine),
      fromEvent(window, "online").pipe(mapTo(true)),
      fromEvent(window, "offline").pipe(mapTo(false))
    );
    this.networkStatus();
  }
  public networkStatus() {
    this.online$.subscribe(value => {
      if (value) {
        this.isConnected = true;
        this.status = "ONLINE";
      } else {
        this.isConnected = false;
        this.status = "OFFLINE";
      }
    });
  }

  ngOnInit() {
    this.loading =  true;
    this.gtsearchservice.getInfo().then(data => {
      this.details = data;
    });
    this.gtsearchservice.getUserRepo().then(repos => {
      this.repos = repos;
      this.loading = false;
    });
  }
}
