import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperienceJob2Component } from './work-experience-job2.component';

describe('WorkExperienceJob2Component', () => {
  let component: WorkExperienceJob2Component;
  let fixture: ComponentFixture<WorkExperienceJob2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkExperienceJob2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExperienceJob2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});