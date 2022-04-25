import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { IUser } from 'src/app/interfaces/user.interface';
import { kendoGridService } from '../kendo-grid.service';

@Injectable({
  providedIn: 'root',
})
export class ResolveGuard implements Resolve<any> {
  public gridData: IUser[] = [];

  constructor(private readFromFileService: kendoGridService) {}
  resolve(): Observable<any> {
    return this.readFromFileService.getJSON().pipe(
      catchError((err) => {
        return of('no data');
      })
    );
  }
}
