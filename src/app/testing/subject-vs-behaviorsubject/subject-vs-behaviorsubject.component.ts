import { Subject, BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject-vs-behaviorsubject',
  templateUrl: './subject-vs-behaviorsubject.component.html',
  styleUrls: ['./subject-vs-behaviorsubject.component.scss'],
})
export class SubjectVsBehaviorsubjectComponent implements OnInit {
  private sourceSubject = new Subject<string>();
  private sourceBehaviorSubject = new BehaviorSubject<string>('initial value');

  constructor() {}

  ngOnInit(): void {
    this.sourceSubject.subscribe((value) => console.log(value));
    this.sourceSubject.next('Subject -> hello');
    this.sourceSubject.subscribe((value) => console.log(value));
    this.sourceSubject.next('Subject -> hello recall');

    this.sourceBehaviorSubject.subscribe((value) => console.log(value));
    this.sourceBehaviorSubject.subscribe((value) => console.log(value));
    this.sourceBehaviorSubject.next('Miguel');
    this.sourceBehaviorSubject.subscribe((value) => console.log(value));
    this.sourceBehaviorSubject.subscribe((value) => console.log(value));
  }
}
