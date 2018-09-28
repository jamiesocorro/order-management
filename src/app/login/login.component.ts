import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    user: any;
    hasError: boolean = false;

    constructor(public router: Router){}

    ngOnInit() {
        this.user = {
            username: '',
            password: ''
        }
    }

    login() {
        const adminUser = JSON.parse(localStorage.getItem('adminUser')) as any;
        const { username, password } = this.user;

        if (adminUser) {
            if (username == adminUser.username && password == adminUser.password) {
                adminUser.isLoggedIn = true;
                localStorage.setItem('adminUser', JSON.stringify(adminUser));
                this.router.navigate(['order']);
            }
        }

        this.hasError = true;
    }
}
