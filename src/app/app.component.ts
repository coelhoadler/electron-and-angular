import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	counter : number;
	JSON : string;

	constructor(http : Http) {

		let url = 'https://meu-site-5f4d8.firebaseio.com/.json';

		http
			.get(url)
			.map(res => res.json())
			.subscribe(json => {
				this.JSON = JSON.stringify(json);
				console.log(this.JSON);
			});

		console.log("entrando no construtor do main3");
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
