import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GtsearchService {
  mInfo: any[];
  mRepos: any[];
  userRepo: any[];
  constructor(private http: HttpClient) {}
  getInfo(): Promise<any> {
    const promise = new Promise((resolve, reject) => {
      const apiUrl = `https://api.github.com/users/atembamanu?access_token=${environment.apiKey}`;
      this.http
        .get<any>(apiUrl)
        .toPromise()
        .then(res => {
          resolve(res);
        })
        .catch(error => reject(error));
    });
    return promise;
  }

  constructor() { }
}
