import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatOncarAutocompleteComponent } from './mat-oncar-autocomplete.component';

describe('MatOncarAutocompleteComponent', () => {
  let component: MatOncarAutocompleteComponent;
  let fixture: ComponentFixture<MatOncarAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatOncarAutocompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatOncarAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
