import { TestBed } from '@angular/core/testing';

import { AdminHomeGuard } from './admin-home.guard';

describe('AdminHomeGuard', () => {
  let guard: AdminHomeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminHomeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
