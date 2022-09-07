/*
============================================
; Title: Assignment 5.2 - Bob's Auto Repair App - product.js
; Author: Professor Krasso & Ace Baugh
; Date: 09/07/2022
; Modified By: Ace Baugh
; Description: WEB 330 Bob's Auto Repair App - Product model class
============================================
*/ 

export class Product {
	constructor(name, price) {
		this.name = name;
		this.price = price;
		this.id = Math.random().toString(16).slice(2);
	}
}
