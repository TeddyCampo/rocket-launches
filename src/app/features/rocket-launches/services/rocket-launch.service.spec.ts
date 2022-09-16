import { TestBed } from '@angular/core/testing';

import { RocketLaunchService } from './rocket-launch.service';

describe('RocketLaunchService', () => {
  let service: RocketLaunchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RocketLaunchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
