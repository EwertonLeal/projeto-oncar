import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleicatalogComponent } from './vehicleicatalog.component';

describe('VehicleicatalogComponent', () => {
  let component: VehicleicatalogComponent;
  let fixture: ComponentFixture<VehicleicatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleicatalogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleicatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
