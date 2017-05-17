import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'bookcase',
	templateUrl: './bookcase.component.html'
})
export class BookcaseComponent {

	title: string;

	constructor() {
		this.title = "Bookcase";
	}

}