import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	counter : number;

	constructor() {
		console.log("entrando no construtor do main");
		this.counter = 1;
	}

	get counterValue() {
		return this.counter;
	}

	set counterValue(value) {
		this.counter = value;
	}

	decrement() {
		this.counter--;
	}

	increment() {
		this.counter++;
	}

}
