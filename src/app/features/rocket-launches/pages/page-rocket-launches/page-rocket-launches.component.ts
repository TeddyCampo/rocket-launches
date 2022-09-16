import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { RocketLaunchService } from '../../services/rocket-launch.service';

@Component({
  selector: 'app-page-rocket-launches',
  templateUrl: './page-rocket-launches.component.html',
  styleUrls: ['./page-rocket-launches.component.scss']
})
export class PageRocketLaunchesComponent implements OnInit, OnDestroy {

  private launchSubscription = new Subscription();
  launchesLimit = 50;
  launches = [];

  constructor(
    private rocketLaunchService: RocketLaunchService
  ) { }

  ngOnInit(): void {
    this.launchSubscription = this.rocketLaunchService.getNextRocketLaunches(this.launchesLimit).subscribe(launches => {
      console.log("launches:", launches);
      this.launches = launches.results;
    })
  }
  ngOnDestroy(): void {
    this.launchSubscription.unsubscribe();
  }

}
