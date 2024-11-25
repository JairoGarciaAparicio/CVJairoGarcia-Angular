import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkExperienceRoutingModule } from './work-experience-routing.module';
import { WorkExperienceComponent } from './work-experience.component';
import { WorkExperienceJob1Component } from './work-experience-job1/work-experience-job1.component';
import { WorkExperienceJob2Component } from './work-experience-job2/work-experience-job2.component';
import { WorkExperienceJob3Component } from './work-experience-job3/work-experience-job3.component';
import { WorkExperienceJob4Component } from './work-experience-job4/work-experience-job4.component';
import { WorkExperienceNoSelectionComponent } from './work-experience-no-selection/work-experience-no-selection.component';

import { CustomMaterialsModule } from '../custom-materials/custom-materials.module';

@NgModule({
  declarations: [
      WorkExperienceComponent,
      WorkExperienceJob1Component,
      WorkExperienceJob2Component,
      WorkExperienceJob3Component,
      WorkExperienceJob4Component,
      WorkExperienceNoSelectionComponent
  ],
  imports: [
    CommonModule,
    WorkExperienceRoutingModule,
    CustomMaterialsModule
  ]
})
export class WorkExperienceModule { }