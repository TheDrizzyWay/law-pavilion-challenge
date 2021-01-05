import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StepService } from 'src/app/services/step.service';

@Component({
  selector: 'app-education-page',
  templateUrl: './education-page.component.html',
  styleUrls: ['./education-page.component.css']
})
export class EducationPageComponent implements OnInit {
  educationForm = new FormGroup({
    school: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(100)
    ]),
    course: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50)
    ]),
    qualifications: new FormControl('', [
      Validators.required
    ])
  });
  constructor(private stepService: StepService) { }

  ngOnInit(): void {
  }

  eduSubmit() {
    this.stepService.changeStep(3);
  }

}
