import { TimerService } from './../../services/timer.service';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit, OnDestroy {
  @Output() onComplete = new EventEmitter<void>();
  @Input() init: number = 20;

  private countdownEndRef: Subscription = null;

  constructor(public timer: TimerService) {}

  ngOnInit(): void {
    this.timer.restartCountdown(this.init);
    this.countdownEndRef = this.timer.countdownEnd$.subscribe(() => {
      this.onComplete.emit();
    });
  }

  ngOnDestroy() {
    this.timer.destroy();
    this.countdownEndRef.unsubscribe();
  }
}
