import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    form: FormGroup;

    ngOnInit(): void {
    }
    constructor(private fb: FormBuilder,
        private authService: AuthenticationService,
        private router: Router) {

        this.form = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login() {
        const val = this.form.value;
        
        if (val.email && val.password) {
            this.authService.login(val.email, val.password)
            .subscribe(
                (res) => {
                    if(res.succes==1){
                        this.router.navigateByUrl('grid');
                    }else{
                        alert(res.message);
                    }
                }
            );
        }
    }
}
