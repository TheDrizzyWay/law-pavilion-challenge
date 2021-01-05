import { Component, OnInit } from '@angular/core';
import { StepService } from '../app/services/step.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'law pavillion technical challenge';
  currentStep: number;

  constructor(private stepService: StepService) {}

  ngOnInit() {
    this.stepService.onStepChange().subscribe(res => this.currentStep = res);
  }

  setWrapperClass(step: number): object {
    if (step == this.currentStep) {
      return { 'active-wrapper': true };
    }

    return {};
  }

  setTextClass(step: number) {
    if (step == this.currentStep) {
      return { 'active-text': true };
    }

    return {};
  }
}
