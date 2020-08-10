import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersControlComponent } from './admin-users-control.component';

describe('AdminUsersControlComponent', () => {
  let component: AdminUsersControlComponent;
  let fixture: ComponentFixture<AdminUsersControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUsersControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsersControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
