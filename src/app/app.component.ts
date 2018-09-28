import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'order-management';

	constructor() {
		// add admin user on component start
		const hasAdminUser = localStorage.getItem('adminUser');

		if (!hasAdminUser)
			localStorage.setItem('adminUser', JSON.stringify({
				username: 'admin',
				password: 'admin',
				isLoggedIn: false
			}));
	}

}
