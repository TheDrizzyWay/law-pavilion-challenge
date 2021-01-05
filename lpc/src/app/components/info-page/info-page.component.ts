import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StepService } from 'src/app/services/step.service';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.css']
})
export class InfoPageComponent implements OnInit {
  infoForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(24)
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(24)
    ]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(11),
      Validators.maxLength(11)
    ]),
    email: new FormControl('', [
      Validators.email,
      Validators.required
    ]),
    country: new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]),
    city: new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]),
  });

  constructor(private stepService: StepService) { }

  ngOnInit(): void {
  }

  infoSubmit() {
    this.stepService.changeStep(2);
  }

}
