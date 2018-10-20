import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardClientListComponent } from './dashboard-client-list.component';

describe('DashboardClientListComponent', () => {
  let component: DashboardClientListComponent;
  let fixture: ComponentFixture<DashboardClientListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardClientListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardClientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
