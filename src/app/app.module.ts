import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubSearchComponent } from './github-search/github-search.component';
import { CountimePassed } from './counttimepassed.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { GtprofileComponent } from './gtprofile/gtprofile.component';
import { GtsearchService } from './gtsearch.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ConnectionService } from 'ng-connection-service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TextInputColorDirective } from './text-input-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    GithubSearchComponent,
    CountimePassed,
    NavbarComponent,
    GtprofileComponent,
    PageNotFoundComponent,
    TextInputColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatProgressSpinnerModule,


  ],
  providers: [GtsearchService, ConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
