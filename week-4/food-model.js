/*
============================================
; Title: Assignment 4.2 - Calorie App - food-model.js
; Author: Professor Krasso & Ace Baugh
; Date: 08/31/2022
; Modified By: Ace Baugh
; Description: WEB 330 Calorie App
============================================
*/

export class FoodModel {
   constructor(id, name, calories) {
      Object.assign(this, { id, name, calories });
   }
}