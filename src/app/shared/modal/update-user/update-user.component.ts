import { Component, ViewChild, OnInit, AfterViewInit, OnDestroy, ViewContainerRef, OnChanges, Input, Output } from '@angular/core';
import { UserDetailsService } from '../../service/user.service';

@Component({
    selector: 'update-user',
    templateUrl: './update-user.component.html'
})


export class UpdateUserComponent implements OnChanges {

    @Input()
    user: any;

    userCopy = null;

    constructor(private _userService: UserDetailsService) {
        
    }

    ngOnChanges() {
        this.userCopy = { ...this.user };
    }

    updateUser(user) {
       const updateUser = this._userService.updateUser(user);
       this.user.username = updateUser.username;
    }

    setDefault() {
        this.userCopy = { ...this.user }
    }

}
