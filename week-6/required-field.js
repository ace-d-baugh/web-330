/* 
============================================
; Title: Assignment 6.2 - Future Value App - required-field.js
; Author: Professor Krasso & Ace Baugh
; Date: 09/13/2022
; Modified By: Ace Baugh
; Description: WEB 330 Future Value App - Checks if input is empty
; and sends error message if it is
============================================
*/

export class RequiredField {
	constructor(name, field) {
		this.name = name;
		this.field = field;
	}

	validate() {
      return Boolean(this.field);
	}
   getMessage() {
      return  `${this.name} is a required field.`;
   }
}
