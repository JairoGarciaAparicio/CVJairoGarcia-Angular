import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingPruebaJob2Component } from './work-experience-job1.component';

describe('TrainingPruebaJob2Component', () => {
  let component: TrainingPruebaJob2Component;
  let fixture: ComponentFixture<TrainingPruebaJob2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingPruebaJob2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingPruebaJob2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});