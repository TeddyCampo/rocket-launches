import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageRocketLaunchesComponent } from './features/rocket-launches/pages/page-rocket-launches/page-rocket-launches.component';

const routes: Routes = [
  { path: 'launches', component: PageRocketLaunchesComponent },
  { path: '**', redirectTo: "/launches" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
