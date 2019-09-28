import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubSearchComponent } from './github-search/github-search.component';
import { HighlightRecentRepoDirective } from './highlight-recent-repo.directive';
import { RemoveHyphensPipe } from './remove-hyphens.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { GtprofileComponent } from './gtprofile/gtprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubSearchComponent,
    HighlightRecentRepoDirective,
    RemoveHyphensPipe,
    NavbarComponent,
    GtprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
