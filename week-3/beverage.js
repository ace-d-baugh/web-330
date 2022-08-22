/*
============================================
; Title: Assignment 2.2 - Restaurant App - beverage.js
; Author: Professor Krasso & Ace Baugh
; Date: 08/21/2022
; Modified By: Ace Baugh
; Description: WEB 330 Restaurant App 
============================================
*/

import { Product } from "./product.js";

export class Beverage extends Product {
   constructor(name, price) {
      super(name, price);
   }
}