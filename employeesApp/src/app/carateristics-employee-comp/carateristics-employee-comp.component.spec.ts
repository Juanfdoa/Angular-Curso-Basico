import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarateristicsEmployeeCompComponent } from './carateristics-employee-comp.component';

describe('CarateristicsEmployeeCompComponent', () => {
  let component: CarateristicsEmployeeCompComponent;
  let fixture: ComponentFixture<CarateristicsEmployeeCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarateristicsEmployeeCompComponent]
    });
    fixture = TestBed.createComponent(CarateristicsEmployeeCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
