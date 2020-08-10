import { TestBed } from '@angular/core/testing';

import { PlayerControlGuard } from './player-control.guard';

describe('PlayerControlGuard', () => {
  let guard: PlayerControlGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PlayerControlGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
