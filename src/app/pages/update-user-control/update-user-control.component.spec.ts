import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserControlComponent } from './update-user-control.component';

describe('UpdateUserControlComponent', () => {
  let component: UpdateUserControlComponent;
  let fixture: ComponentFixture<UpdateUserControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUserControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
