import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManagerSliderComponent } from './admin-manager-slider.component';

describe('AdminManagerSliderComponent', () => {
  let component: AdminManagerSliderComponent;
  let fixture: ComponentFixture<AdminManagerSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminManagerSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManagerSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
