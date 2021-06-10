import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  users: User[] = [
    { name: 'Miguel' },
    { name: 'Giancarlo' },
    { name: 'Patrick' },
  ];
  constructor() {}

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUsers(name: string) {
    this.users = [...this.users, { name }];
  }
}
