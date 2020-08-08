import { TestBed } from '@angular/core/testing';

import { ManpulatePlayerGuard } from './manpulate-player.guard';

describe('ManpulatePlayerGuard', () => {
  let guard: ManpulatePlayerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ManpulatePlayerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
