import { Directive, HostListener, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { StepService } from '../services/step.service';

@Directive({
  selector: '[appBackButton]'
})
export class BackButtonDirective implements OnInit {
  currentStep: number;

  constructor(private stepService: StepService) { }

  ngOnInit() {
    this.stepService.onStepChange().subscribe(res => this.currentStep = res);
  }

  @HostListener('click')
  onClick(): void {
    this.stepService.changeStep(this.currentStep -1);
  }

}
