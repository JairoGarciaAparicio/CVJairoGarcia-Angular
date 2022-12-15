import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../service/training.service';
import { University } from '../models/university.model';

@Component({
  selector: 'app-training-university',
  templateUrl: './training-university.component.html',
  styleUrls: ['./training-university.component.css']
})
export class TrainingUniversityComponent implements OnInit {

    university: University[];

    constructor(private trainingProvider: TrainingService) { }

    ngOnInit() {
        this.university = this.trainingProvider.getUniversity();
    }
 

}