import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnLifeCycleHooksComponent } from './learn-life-cycle-hooks.component';

describe('LearnLifeCycleHooksComponent', () => {
  let component: LearnLifeCycleHooksComponent;
  let fixture: ComponentFixture<LearnLifeCycleHooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnLifeCycleHooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnLifeCycleHooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
