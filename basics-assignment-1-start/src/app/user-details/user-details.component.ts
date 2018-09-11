import { Component } from '@angular/core';

@Component({
	selector: 'app-user-details',
	templateUrl: './user-details.component.html',
	styles: [`
		p{
			background-color:gray;
		}
	`]
})

export class UserDetailsComponent{
	first_name = '';
	last_name = '';
	display_name = '';
	email = '';
	phone_number = '';
	age = '';

} 