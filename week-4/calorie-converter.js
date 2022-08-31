/*
============================================
; Title: Assignment 4.2 - Calorie App - calorie-converter.js
; Author: Professor Krasso & Ace Baugh
; Date: 08/31/2022
; Modified By: Ace Baugh
; Description: WEB 330 Calorie App
============================================
*/

import { FoodModel } from './food-model.js';

export class CalorieConverter {

   static data = [
      new FoodModel(1007, "Egg", 78),
      new FoodModel(1008, "Apple", 95),
      new FoodModel(1009, "Hamburger", 354),
      new FoodModel(1010, "Fries", 400),
      new FoodModel(1011, "Banana", 105),   
      new FoodModel(1012, "Soda", 150)
   ];

   static find (string) {
      return this.data.filter(food => food.name.toLowerCase().includes(string.toLowerCase()));
   }
}
