import { TestBed } from '@angular/core/testing';

import { UserAdminControlGuard } from './user-admin-control.guard';

describe('UserAdminControlGuard', () => {
  let guard: UserAdminControlGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserAdminControlGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
