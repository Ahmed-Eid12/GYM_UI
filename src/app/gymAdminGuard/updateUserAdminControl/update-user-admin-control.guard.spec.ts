import { TestBed } from '@angular/core/testing';

import { UpdateUserAdminControlGuard } from './update-user-admin-control.guard';

describe('UpdateUserAdminControlGuard', () => {
  let guard: UpdateUserAdminControlGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UpdateUserAdminControlGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
