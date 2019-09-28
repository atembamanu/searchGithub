import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubSearchComponent } from './github-search/github-search.component';
import { GtprofileComponent } from './gtprofile/gtprofile.component';


const routes: Routes = [
  { path: 'home', component: GtprofileComponent},
  { path: 'gtsearch', component: GithubSearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
