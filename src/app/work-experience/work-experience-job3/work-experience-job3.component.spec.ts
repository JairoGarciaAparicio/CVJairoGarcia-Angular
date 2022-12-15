import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperienceJob3Component } from './work-experience-job3.component';

describe('WorkExperienceJob2Component', () => {
  let component: WorkExperienceJob3Component;
  let fixture: ComponentFixture<WorkExperienceJob3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkExperienceJob3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExperienceJob3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});