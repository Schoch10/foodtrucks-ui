import { Component } from '@angular/core';

@Component({
	selector: 'android-component',
	templateUrl: './android.component.html',
	styles: [require('./android.component.scss')],
})

export class AndroidComponent {
	
	private showInstructions:boolean = false;

	constructor() { }

	toggleAppVerification() {
		this.showInstructions = !this.showInstructions;
	}
}