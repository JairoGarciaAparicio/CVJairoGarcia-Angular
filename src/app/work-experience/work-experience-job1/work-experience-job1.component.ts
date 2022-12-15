import { Component, OnInit } from '@angular/core';
import { Job1 } from '../models/work-experience-job1.model';
import { WorkExperienceService } from '../service/work-experience.service';

@Component({
  selector: 'app-work-experience-job1',
  templateUrl: './work-experience-job1.component.html',
  styleUrls: ['./work-experience-job1.component.scss']
})
export class WorkExperienceJob1Component implements OnInit {

  job1List: Job1[];

    constructor(private workExperienceProvider: WorkExperienceService) { }

    ngOnInit() {
        this.job1List = this.workExperienceProvider.getJob1();
    }

}