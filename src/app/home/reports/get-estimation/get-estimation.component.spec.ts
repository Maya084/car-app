/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GetEstimationComponent } from './get-estimation.component';

describe('GetEstimationComponent', () => {
  let component: GetEstimationComponent;
  let fixture: ComponentFixture<GetEstimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetEstimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetEstimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
