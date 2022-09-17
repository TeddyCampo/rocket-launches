import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { RocketLaunchService } from '../../services/rocket-launch.service';

@Component({
  selector: 'app-rocket-launches',
  templateUrl: './rocket-launches.component.html',
  styleUrls: ['./rocket-launches.component.scss']
})
export class RocketLaunchesComponent implements OnInit, OnDestroy {

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
