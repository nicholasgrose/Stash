import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStashListComponent } from './dashboard-stash-list.component';

describe('DashboardStashListComponent', () => {
  let component: DashboardStashListComponent;
  let fixture: ComponentFixture<DashboardStashListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardStashListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardStashListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
