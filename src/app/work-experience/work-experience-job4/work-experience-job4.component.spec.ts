import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkExperienceJob4Component } from './work-experience-job4.component';

describe('WorkExperienceJob4Component', () => {
  let component: WorkExperienceJob4Component;
  let fixture: ComponentFixture<WorkExperienceJob4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkExperienceJob4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExperienceJob4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});