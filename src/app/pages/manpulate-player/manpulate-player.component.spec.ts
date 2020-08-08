import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManpulatePlayerComponent } from './manpulate-player.component';

describe('ManpulatePlayerComponent', () => {
  let component: ManpulatePlayerComponent;
  let fixture: ComponentFixture<ManpulatePlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManpulatePlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManpulatePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
