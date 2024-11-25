import { Injectable } from '@angular/core';
import { WorkExperienceElement } from '../models/work-experience-element.model';
import { Job1 } from '../models/work-experience-job1.model';
import { Job2 } from '../models/work-experience-job2.model';
import { Job3 } from '../models/work-experience-job3.model';
import { Job4 } from '../models/work-experience-job4.model';
import JSONinfo from '../../../assets/work-experience.json';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {

    workExperienceList : any[] = []
    job1: any[] = []
    job2: any[] = []
    job3: any[] = []
    job4: any[] = []

    constructor() { 
        this.processInfoFromJSON();
    }

    processInfoFromJSON() {
        JSONinfo.workExperience.forEach((workExperienceElement: WorkExperienceElement) => {
            this.workExperienceList.push(workExperienceElement);
        });
        JSONinfo.job1.forEach((job1) => {
            this.job1.push(job1);
        });
        JSONinfo.job2.forEach((job2) => {
            this.job2.push(job2);
        });
        JSONinfo.job3.forEach((job3) => {
            this.job3.push(job3);
        });
        JSONinfo.job4.forEach((job4) => {
            this.job4.push(job4);
        });
    }

    getWorkExperienceElements(): WorkExperienceElement[] {
        return this.workExperienceList;
    }

    getJob1(): Job1[] {
        return this.job1;
    }
    getJob2(): Job2[] {
        return this.job2;
    }
    getJob3(): Job3[] {
        return this.job3;
    }
    getJob4(): Job4[] {
        return this.job4;
    }
}