import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GymLoginHomeComponent } from './gym-login-home.component';

describe('GymLoginHomeComponent', () => {
  let component: GymLoginHomeComponent;
  let fixture: ComponentFixture<GymLoginHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymLoginHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GymLoginHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
