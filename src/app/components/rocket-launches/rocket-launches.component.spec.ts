import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketLaunchesComponent } from './rocket-launches.component';

describe('RocketLaunchesComponent', () => {
  let component: RocketLaunchesComponent;
  let fixture: ComponentFixture<RocketLaunchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RocketLaunchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RocketLaunchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
