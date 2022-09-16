import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { RocketLaunchService } from '../../services/rocket-launch.service';

@Component({
  selector: 'app-rocket-details',
  templateUrl: './rocket-details.component.html',
  styleUrls: ['./rocket-details.component.scss']
})
export class RocketDetailsComponent implements OnInit {

  launch$: Observable<any>;
  launchDetails: any;

  constructor(
    private route: ActivatedRoute,
    private rocketLaunchService: RocketLaunchService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.launch$ = this.route.paramMap.pipe(
      switchMap(params => {
        const launchId = params.get('id') as string;
        return this.rocketLaunchService.getRocketLaunchDetails(launchId);
      })
    )
    this.launch$.subscribe({
      next: (res) => this.launchDetails = res,
      error: () => this.router.navigate(['/404'])
    });

  }
}
