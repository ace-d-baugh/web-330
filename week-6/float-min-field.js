/* 
============================================
; Title: Assignment 6.2 - Future Value App - float-min-field.js
; Author: Professor Krasso & Ace Baugh
; Date: 09/13/2022
; Modified By: Ace Baugh
; Description: WEB 330 Future Value App - Checks if input is a 
; float and if it is greater than the minimum value
; Sends error message if not
============================================
*/

export class FloatMinField {
	constructor(name, field, min) {
		this.name = name;
		this.field = field;
		this.min = min;
	}

	validate() {
		return parseFloat(this.field) > this.min;
	}

	getMessage() {
		return `${this.name} must be a more than ${this.min}. You entered ${this.field}.`;
	}
}