import { Component, OnInit } from '@angular/core';
import { Job2 } from '../models/work-experience-job2.model';
import { WorkExperienceService } from '../service/work-experience.service';

@Component({
  selector: 'app-work-experience-job2',
  templateUrl: './work-experience-job2.component.html',
  styleUrls: ['./work-experience-job2.component.scss']
})
export class WorkExperienceJob2Component implements OnInit {

  job2List: Job2[];

    constructor(private workExperienceProvider: WorkExperienceService) { }

    ngOnInit() {
        this.job2List = this.workExperienceProvider.getJob2();
    }

}