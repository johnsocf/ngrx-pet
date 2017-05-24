import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifestyleOverviewComponent } from './lifestyle-overview.component';

describe('LifestyleOverviewComponent', () => {
  let component: LifestyleOverviewComponent;
  let fixture: ComponentFixture<LifestyleOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifestyleOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifestyleOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
