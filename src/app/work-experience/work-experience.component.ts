import { Component, OnInit } from '@angular/core';
import { WorkExperienceService } from './service/work-experience.service';
import { WorkExperienceElement } from './models/work-experience-element.model';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

    public trainingList: WorkExperienceElement[];

    constructor(private workExperienceProvider: WorkExperienceService) { }

    ngOnInit() {
        this.trainingList = this.workExperienceProvider.getWorkExperienceElements();
    }

}