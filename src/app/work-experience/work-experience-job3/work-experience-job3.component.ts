import { Component, OnInit } from '@angular/core';
import { Job3 } from '../models/work-experience-job3.model';
import { WorkExperienceService } from '../service/work-experience.service';

@Component({
  selector: 'app-work-experience-job3',
  templateUrl: './work-experience-job3.component.html',
  styleUrls: ['./work-experience-job3.component.scss']
})
export class WorkExperienceJob3Component implements OnInit {

  job3List: Job3[];

    constructor(private workExperienceProvider: WorkExperienceService) { }

    ngOnInit() {
        this.job3List = this.workExperienceProvider.getJob3();
    }

}