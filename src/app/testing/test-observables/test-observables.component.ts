import { Title } from '@angular/platform-browser';
import { ApiService } from './api.service';
import { User } from './../models';
import { Observable, BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-test-observables',
  templateUrl: './test-observables.component.html',
  styleUrls: ['./test-observables.component.scss'],
})
export class TestObservablesComponent implements OnInit {
  name = '';
  users$: Observable<User[]>;
  refreshUsers$ = new BehaviorSubject<boolean>(true);

  constructor(private apiService: ApiService, private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('example::observables');
    this.users$ = this.refreshUsers$.pipe(
      switchMap((_) => {
        console.log('rpta', _);
        return this.apiService.getUsers();
      })
    );
    //this.refreshUsers$.subscribe((resp) => console.log(resp));
  }

  addUser() {
    this.apiService.addUsers(this.name);
    this.name = '';
    this.refreshUsers$.next(true);
  }
}
