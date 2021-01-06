import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StepService } from 'src/app/services/step.service';

@Component({
  selector: 'app-work-page',
  templateUrl: './work-page.component.html',
  styleUrls: ['./work-page.component.css']
})
export class WorkPageComponent implements OnInit {
  workForm = new FormGroup({
    experience1: new FormControl('', [
      Validators.required
    ]),
    position1: new FormControl('', [
      Validators.required,
      Validators.maxLength(50)
    ]),
    experience2: new FormControl(''),
    position2: new FormControl(''),
    experience3: new FormControl('')
  });

  constructor(private stepService: StepService) { }

  ngOnInit(): void {
  }

  workSubmit() {
    if (this.workForm.valid) {
      this.stepService.changeStep(4);
    }
  }

}
