import { Component, OnInit, ViewChild } from '@angular/core';
import { IUser, User } from '../interfaces/user.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../auth/components/login/authentication.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kendo-grid',
  templateUrl: './kendo-grid.component.html',
  styleUrls: ['./kendo-grid.component.scss'],
})
export class KendoGridComponent implements OnInit {
  public gridData: IUser[] = [];
  form: FormGroup;

  constructor(
    public auth: AuthenticationService,
    public activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required],
      id: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: any) => {
      this.gridData = data.data;
    });
  }

  createNewUser(): User {
    return new User();
  }
}
