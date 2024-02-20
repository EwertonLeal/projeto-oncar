import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCarBrandComponent } from './search-car-brand.component';

describe('SearchCarBrandComponent', () => {
  let component: SearchCarBrandComponent;
  let fixture: ComponentFixture<SearchCarBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCarBrandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchCarBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
