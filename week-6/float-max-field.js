/* 
============================================
; Title: Assignment 6.2 - Future Value App - float-max-field.js
; Author: Professor Krasso & Ace Baugh
; Date: 09/13/2022
; Modified By: Ace Baugh
; Description: WEB 330 Future Value App
============================================
*/

class FloatMaxField {
   constructor(name, field, max) {
      this.name = name;
      this.field = field;
      this.max = max;
   }

   validate() {
      return parseFloat(this.field.value) < this.max;
   }

   getMessage() {
      return `${this.name} must be less than ${this.max}. You entered ${this.field.value}.`;
   }
}

module.exports = FloatMaxField;