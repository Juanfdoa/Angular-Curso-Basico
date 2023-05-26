import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSonCComponent } from './employee-son-c.component';

describe('EmployeeSonCComponent', () => {
  let component: EmployeeSonCComponent;
  let fixture: ComponentFixture<EmployeeSonCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeSonCComponent]
    });
    fixture = TestBed.createComponent(EmployeeSonCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
