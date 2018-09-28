import { Component, ViewChild, OnInit, AfterViewInit, OnDestroy, ViewContainerRef } from '@angular/core';
 
@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    user: any;

    ngOnInit() {
        this.user = {
            name: null,
            password: null
        }
    }

    login() {
        
    }
}
