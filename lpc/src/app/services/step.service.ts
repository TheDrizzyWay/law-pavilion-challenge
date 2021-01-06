import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StepService {
  private stepSubject = new BehaviorSubject<number>(1);
  constructor() { }

  onStepChange(): Observable<number> {
    return this.stepSubject.asObservable();
  }

  changeStep(step: number): void {
    return this.stepSubject.next(step);
  }

  submission(data): Observable<boolean> {
    return of(true);
  }
}
