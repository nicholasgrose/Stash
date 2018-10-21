import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StashsomethingComponent } from './stashsomething.component';

describe('StashsomethingComponent', () => {
  let component: StashsomethingComponent;
  let fixture: ComponentFixture<StashsomethingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StashsomethingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StashsomethingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
