import { TestBed } from '@angular/core/testing';

import { PlayerRegisterGuard } from './player-register.guard';

describe('PlayerRegisterGuard', () => {
  let guard: PlayerRegisterGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PlayerRegisterGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
