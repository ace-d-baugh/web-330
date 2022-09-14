/* 
============================================
; Title: Assignment 6.2 - Future Value App - validator.js
; Author: Professor Krasso & Ace Baugh
; Date: 09/13/2022
; Modified By: Ace Baugh
; Description: WEB 330 Future Value App
============================================
*/

import { RequiredField } from "./required-field.js";
import { FloatField } from "./float-field.js";
import { FloatMinField } from "./float-min-field.js";
import { FloatMaxField } from "./float-max-field.js";

export class Validator {
   validators = [];
   messages = [];

	constructor(name, field) {
		this.name = name;
		this.field = field;
	}

	addRequiredField(name, field) {
		this.validators.push(new RequiredField(this.name, this.field));
	}

	addRequiredFloatField(name, field) {
		this.validators.push(new FloatField(this.name, this.field));
	}

	addFloatMinField(min) {
		this.validators.push(new FloatMinField(this.name, this.field, min));
	}

	addFloatMaxField(max) {
		this.validators.push(new FloatMaxField(this.name, this.field, max));
	}

	validate() {
      for (let validator of this.validators) {
         if (!validator.validate()) {
            this.messages.push(validator.getMessage());
         }
      }
      return true;
	}

	getMessage() {
	}
}

