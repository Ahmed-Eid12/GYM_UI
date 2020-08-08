import { TestBed } from '@angular/core/testing';

import { UpdatePlayerGuard } from './update-player.guard';

describe('UpdatePlayerGuard', () => {
  let guard: UpdatePlayerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UpdatePlayerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
