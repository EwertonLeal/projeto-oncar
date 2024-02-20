import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OncarInputComponent } from './oncar-input.component';

describe('OncarInputComponent', () => {
  let component: OncarInputComponent;
  let fixture: ComponentFixture<OncarInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OncarInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OncarInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
