import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable()
export class kendoGridService {
  constructor(private http: HttpClient) {}

  getJSON(): Observable<any> {
    return this.http.get('data/users.json');
  }
}
