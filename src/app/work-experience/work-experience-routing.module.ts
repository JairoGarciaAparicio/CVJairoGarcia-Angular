import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkExperienceComponent } from './work-experience.component';
import { WorkExperienceNoSelectionComponent } from './work-experience-no-selection/work-experience-no-selection.component';
import { WorkExperienceJob1Component } from './work-experience-job1/work-experience-job1.component';
import { WorkExperienceJob2Component } from './work-experience-job2/work-experience-job2.component';
import { WorkExperienceJob3Component } from './work-experience-job3/work-experience-job3.component';
import { WorkExperienceJob4Component } from './work-experience-job4/work-experience-job4.component';

const routes: Routes = [
    {
        path: '',
        component: WorkExperienceComponent,
        children: [
            { path: '', component: WorkExperienceNoSelectionComponent },
            { path: 'job1', component: WorkExperienceJob1Component },
            { path: 'job2', component: WorkExperienceJob2Component },
            { path: 'job3', component: WorkExperienceJob3Component },
            { path: 'job4', component: WorkExperienceJob4Component }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkExperienceRoutingModule { }
