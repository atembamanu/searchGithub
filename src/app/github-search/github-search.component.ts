import { Component, OnInit } from "@angular/core";
import { GtsearchService } from "../gtsearch.service";
import { Observable, fromEvent, merge, of } from "rxjs";
import { mapTo } from "rxjs/operators";
@Component({
  selector: "app-github-search",
  templateUrl: "./github-search.component.html",
  styleUrls: ["./github-search.component.css"]
})
export class GithubSearchComponent implements OnInit {
  isConnected = true;
  gtrepos: any;
  gtusers: any;
  gtuserdetails: any;
  repodata: boolean;
  online$: Observable<boolean>;
  status: string;
  repodetail: boolean;
  loading = false;


  criteriaArray: string[] = ["Users", "Repositories"];
  constructor(private gtService: GtsearchService) {
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
  findRepos(repoLocation: string) {
    this.repodetail = true;
    this.loading = true;
    this.gtService.gwtUserDetails(repoLocation).then(gtuserdetails => {
      this.gtuserdetails = gtuserdetails;
      this.loading = false;
    });
  }

  ngOnInit() { }
  performSearch(criteria: string, data: string) {
    if (criteria === this.criteriaArray[0]) {
      this.repodata = false;
      this.repodetail = false;
      this.loading = true;
      this.gtService.searchByUser(data).then(users => {
        this.gtusers = users;
        this.loading = false;
      });
    } else {
      this.repodata = true;
      this.repodetail = false;
      this.loading = true;
      this.gtService.searchByRepos(data).then(repos => {
        this.gtrepos = repos;
        this.loading = false;
      });
    }
  }
}
