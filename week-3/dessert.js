/*
============================================
; Title: Assignment 3.2 - Restaurant App - dessert.js
; Author: Professor Krasso & Ace Baugh
; Date: 08/21/2022
; Modified By: Ace Baugh
; Description: WEB 330 Restaurant App: Creates dessert 
;					class constructor from product
============================================
*/

import { Product } from './product.js';

export class Dessert extends Product {
	constructor(name, price) {
		super(name, price);
	}
}