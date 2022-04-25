import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { Observable, of, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<any> {
    var cred = this.postCredsToServiceToValidate(email, password);
    if (cred) {
      return this.http.get('data/jwt.json').pipe(
        tap((res: any) => {
          this.setSession(res);
        })
      );
    } else {
      return of({ message: 'unauthorized', success: '0' });
    }
  }

  postCredsToServiceToValidate(email: string, password: string): boolean {
    if (email != environment.mockEmail || password != environment.mockpswd) {
      return false;
    }
    return true;
  }

  private setSession(authResult: any) {
    const expiresAt = moment().add(authResult.expires_at, 'second');

    localStorage.setItem('access_token', authResult.access_token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('expires_at');
    this.router.navigate(['login']);
  }

  public isLoggedIn() {
    if (localStorage.getItem('access_token') != null)
      return moment().isBefore(this.getExpiration());
    return false;
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = expiration !== null ? JSON.parse(expiration) : {};
    return moment(expiresAt);
  }
}
