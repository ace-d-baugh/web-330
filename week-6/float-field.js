/* 
============================================
; Title: Assignment 6.2 - Future Value App - float-field.js
; Author: Professor Krasso & Ace Baugh
; Date: 09/13/2022
; Modified By: Ace Baugh
; Description: WEB 330 Future Value App - Checks if input is a
; float and sends error message if not
============================================
*/

export class FloatField {
   constructor(name, field) {
      this.name = name;
      this.field = field;
   }

   validate() {
      return !isNaN(this.field);
   }

   getMessage() {
      return `${this.name} must be a float value. You entered ${this.field}.`;
   }
}
