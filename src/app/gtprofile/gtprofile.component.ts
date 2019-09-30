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

  constructor() { }

  ngOnInit() {
  }

}
