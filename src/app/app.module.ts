import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageRocketLaunchesComponent } from './features/rocket-launches/pages/page-rocket-launches/page-rocket-launches.component';
import { RocketListComponent } from './features/rocket-launches/components/rocket-list/rocket-list.component';
import { RocketDetailsComponent } from './features/rocket-launches/components/rocket-details/rocket-details.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageRocketLaunchesComponent,
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
