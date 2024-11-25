import { Component, OnInit } from '@angular/core';
import { Job4 } from '../models/work-experience-job4.model';
import { WorkExperienceService } from '../service/work-experience.service';

@Component({
  selector: 'app-work-experience-job4',
  templateUrl: './work-experience-job4.component.html',
  styleUrls: ['./work-experience-job4.component.scss']
})
export class WorkExperienceJob4Component implements OnInit {

  job4List: Job4[];

    constructor(private workExperienceProvider: WorkExperienceService) { }

    ngOnInit() {
        this.job4List = this.workExperienceProvider.getJob4();
    }

}