import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRocketLaunchesComponent } from './page-rocket-launches.component';

describe('PageRocketLaunchesComponent', () => {
  let component: PageRocketLaunchesComponent;
  let fixture: ComponentFixture<PageRocketLaunchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageRocketLaunchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageRocketLaunchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
