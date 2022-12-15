import { Injectable } from '@angular/core';
import { TrainingElement } from '../models/training-element.model';
import { University } from '../models/university.model';
import { Course } from '../models/course.model';
import JSONinfo from '../../../assets/training.json';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

    trainingList : any[] = []

    university: any[] = []

    coursesList: any[] = []

    constructor() { 
        this.processInfoFromJSON();
    }

    processInfoFromJSON() {
        JSONinfo.training.forEach((trainingElement: TrainingElement) => {
            this.trainingList.push(trainingElement);
        });
        JSONinfo.university.forEach((university) => {
            this.university.push(university);
        });
        JSONinfo.courses.forEach((course: Course) => {
            this.coursesList.push(course);
        });
    }

    getTrainingElements(): TrainingElement[] {
        return this.trainingList;
    }

    getUniversity(): University[] {
        return this.university;
    }

    getCourses(): Course[] {
        return this.coursesList;
    }
}