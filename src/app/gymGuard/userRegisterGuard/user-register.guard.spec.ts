import { TestBed } from '@angular/core/testing';

import { UserRegisterGuard } from './user-register.guard';

describe('UserRegisterGuard', () => {
  let guard: UserRegisterGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserRegisterGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
