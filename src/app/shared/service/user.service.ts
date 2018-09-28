import { Injectable } from '@angular/core';


@Injectable()
export class UserDetailsService {
    adminUser: any;

     updateUser(user: any) {
        this.adminUser = JSON.parse(localStorage.getItem('adminUser')) as any;
        this.adminUser.username = user.username;
        this.adminUser.password = user.password;

        localStorage.setItem('adminUser', JSON.stringify(this.adminUser));

        return this.adminUser;
    }

}