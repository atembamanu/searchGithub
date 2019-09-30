import { Component, OnInit } from "@angular/core";
import { GtsearchService } from "../gtsearch.service";
import { Observable, fromEvent, merge, of } from "rxjs";
import { mapTo } from "rxjs/operators";
@Component({
  selector: 'app-gtprofile',
  templateUrl: './gtprofile.component.html',
  styleUrls: ['./gtprofile.component.css']
})
export class GtprofileComponent implements OnInit {
  online$: Observable<boolean>;
  status: string;
  isConnected = true;
  details: any;
  repos: any;
  loading = false;

  constructor() { }

  ngOnInit() {
  }

}
