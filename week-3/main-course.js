/*
============================================
; Title: Assignment 2.2 - Restaurant App - main-course.js
; Author: Professor Krasso & Ace Baugh
; Date: 08/21/2022
; Modified By: Ace Baugh
; Description: WEB 330 Restaurant App: Creates main course 
;					class constructor from product 
============================================
*/

import { Product } from './product.js';

export class MainCourse extends Product {
	constructor(name, price) {
		super(name, price);
	}
}