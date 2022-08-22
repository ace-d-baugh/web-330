/*
============================================
; Title: Assignment 2.2 - Restaurant App - bill.js
; Author: Professor Krasso & Ace Baugh
; Date: 08/21/2022
; Modified By: Ace Baugh
; Description: WEB 330 Restaurant App 
============================================
*/

export class Bill {

   constructor(_beverages, _appetizers, _mainCourses, _desserts) {
      this._beverages = [];
      this._appetizers = [];
      this._mainCourses = [];
      this._desserts = [];
   }

   addBeverage(beverage) {
      this._beverages.push(beverage);
   }

   addAppetizer(appetizer) {
      this._appetizers.push(appetizer);
   }

   addMainCourses(mainCourses) {
      this._mainCourses.push(mainCourses);
   }

   addDesserts(desserts) {
      this._desserts.push(desserts);
   }

   getTotal() {
      let total = 0;

      let beverageTotal = this._beverages.forEach(function (beverage) {
         total += parseFloat(beverage.price);
      });

      let appetizerTotal = this._appetizers.forEach(function (appetizer) {
         total += parseFloat(appetizer.price);
      });

      let mainCoursesTotal = this._mainCourses.forEach(function (mainCourses) {
         total += parseFloat(mainCourses.price);
      });

      let dessertsTotal = this._desserts.forEach(function (dessert) {
         total += parseFloat(dessert.price);
      });

      return total.toFixed(2);
   }
}

