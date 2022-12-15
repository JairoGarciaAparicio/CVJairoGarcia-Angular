import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperienceNoSelectionComponent } from './work-experience-no-selection.component';

describe('TrainingNoSelectionComponent', () => {
  let component: WorkExperienceNoSelectionComponent;
  let fixture: ComponentFixture<WorkExperienceNoSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkExperienceNoSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExperienceNoSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});