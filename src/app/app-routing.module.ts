import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RocketDetailsComponent } from './components/rocket-details/rocket-details.component';
import { RocketListComponent } from './components/rocket-list/rocket-list.component';
import { RocketLaunchesComponent } from './components/rocket-launches/rocket-launches.component';

const routes: Routes = [
  { path: 'launches/:id', component: RocketDetailsComponent },
  { path: 'launches', component: RocketLaunchesComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '', redirectTo: "/launches", pathMatch:"full" },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
