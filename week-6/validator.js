/* 
============================================
; Title: Assignment 6.2 - Future Value App - validator.js
; Author: Professor Krasso & Ace Baugh
; Date: 09/13/2022
; Modified By: Ace Baugh
; Description: WEB 330 Future Value App - This is the validator class.
; It is used to validate the input fields.
; Sends generated error messages to the array
============================================
*/

/* Import required validation functions */
import { RequiredField } from "./required-field.js";
import { FloatField } from "./float-field.js";
import { FloatMinField } from "./float-min-field.js";
import { FloatMaxField } from "./float-max-field.js";

export class Validator {
	validator = [];
	messages = [];

	constructor(name, field) {
		this.name = name;
		this.field = field;
	}

	/* Validates required field by calling the addRequiredField function */
	addRequiredField() {
		this.validator.push(new RequiredField(this.name, this.field));
	}

	/* Validates required field by calling the addRequiredFloatField function */
	addRequiredFloatField() {
		this.validator.push(new FloatField(this.name, this.field));
	}

	/* Validates required field by calling the floatMinField function */
	addFloatMinField(min) {
		this.validator.push(new FloatMinField(this.name, this.field, min));
	}

	/* Validates required field by calling the floatMaxField function */
	addFloatMaxField(max) {
		this.validator.push(new FloatMaxField(this.name, this.field, max));
	}

	/* Collects all error messages from the validator array */
	validate() {
		for (let field of this.validator) {
			if (!field.validate()) {
				this.messages.push(field.getMessage());
				return false;
			}
		}
		return true;
	}
}