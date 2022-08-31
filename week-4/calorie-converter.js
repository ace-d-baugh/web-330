/*
============================================
; Title: Assignment 4.2 - Calorie App - calorie-converter.js
; Author: Professor Krasso & Ace Baugh
; Date: 08/31/2022
; Modified By: Ace Baugh
; Description: WEB 330 Calorie App - used Food model class to create 
;              array of food items and has a search function to find
;              a food item by name.
============================================
*/

// import the FoodModel class
import { FoodModel } from './food-model.js';

// create a series of new FoodModel objects and store them in an array
export class CalorieConverter {
	static data = [
		new FoodModel(1007, 'Egg', 78),
		new FoodModel(1008, 'Apple', 95),
		new FoodModel(1009, 'Hamburger', 354),
		new FoodModel(1010, 'Fries', 400),
		new FoodModel(1011, 'Banana', 105),
		new FoodModel(1012, 'Soda', 150),
	];

   // function that searches the array for matching strings and returns the matching objects
	static find(string) {
		return this.data.filter((food) => food.name.toLowerCase().includes(string.toLowerCase()));
	}
}
