import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RocketLaunchesComponent } from './components/rocket-launches/rocket-launches.component';
import { RocketListComponent } from './components/rocket-list/rocket-list.component';
import { RocketDetailsComponent } from './components/rocket-details/rocket-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    RocketLaunchesComponent,
    RocketListComponent,
    RocketDetailsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
