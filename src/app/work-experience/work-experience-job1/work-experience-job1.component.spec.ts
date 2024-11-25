import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperienceJob1Component } from './work-experience-job1.component';

describe('WorkExperienceJob1Component', () => {
  let component: WorkExperienceJob1Component;
  let fixture: ComponentFixture<WorkExperienceJob1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkExperienceJob1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExperienceJob1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});