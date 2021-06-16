import { Subscription } from 'rxjs';
import { ApiTimeService } from './../api-time.service';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.component.html',
  styleUrls: ['./tiempo.component.scss'],
})
export class TiempoComponent implements OnInit, OnDestroy {
  @Output() complete = new EventEmitter<void>();
  @Input() init = 30;
  private countdownEndRef: Subscription;

  constructor(public apiTimeService: ApiTimeService) {}

  ngOnInit(): void {
    this.apiTimeService.restartCountdown(this.init);
    this.countdownEndRef = this.apiTimeService.countdownEnd$.subscribe(() => {
      this.complete.emit();
    });
  }

  ngOnDestroy() {
    this.apiTimeService.destroy();
    this.countdownEndRef.unsubscribe();
  }
}
