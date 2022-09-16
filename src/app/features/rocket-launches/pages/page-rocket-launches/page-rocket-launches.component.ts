import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { RocketLaunchService } from '../../services/rocket-launch.service';

@Component({
  selector: 'app-page-rocket-launches',
  templateUrl: './page-rocket-launches.component.html',
  styleUrls: ['./page-rocket-launches.component.scss']
})
export class PageRocketLaunchesComponent implements OnInit, OnDestroy {

  private launchSubscription = new Subscription();
  launchesLimit = 50;
  launches: any[];

  constructor(
    private rocketLaunchService: RocketLaunchService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.launchSubscription = this.rocketLaunchService.getNextRocketLaunches(this.launchesLimit).subscribe(launches => {
      this.launches = launches.results;
    })
  }
  ngOnDestroy(): void {
    this.launchSubscription.unsubscribe();
  }

  selectLaunch(id: string) {
    this.router.navigate(['launches', id]);
  }
}
