import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { RocketDetailsComponent } from './features/rocket-launches/components/rocket-details/rocket-details.component';
import { RocketListComponent } from './features/rocket-launches/components/rocket-list/rocket-list.component';
import { PageRocketLaunchesComponent } from './features/rocket-launches/pages/page-rocket-launches/page-rocket-launches.component';

const routes: Routes = [
  { path: 'launches/:id', component: RocketDetailsComponent },
  { path: 'launches', component: PageRocketLaunchesComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '', redirectTo: "/launches", pathMatch:"full" },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
