/*
============================================
; Title: Assignment 5.2 - Bob's Auto Repair App - shopping-cart.js
; Author: Professor Krasso & Ace Baugh
; Date: 09/07/2022
; Modified By: Ace Baugh
; Description: WEB 330 Bob's Auto Repair App - This  class creates
;              a product list, counts the item in it, adds items to it,
;              iterates over it.
============================================
*/

export class ShoppingCart {
	constructor() {
		this.products = [];
	}

	// This method returns the number of items in the shopping cart
	count() {
		return this.products.length;
	}

	// This method adds a product to the shopping cart
	add(product) {
		this.products.push(product);
	}

	// This method iterates over the shopping cart
	/* *generator() {
		for (let product of this.products) {
			yield product;
		}
	} */

	// This method iterates over the shopping cart
	[Symbol.iterator] = function () {
		let nextIndex = 0;
		return {
			next: () => {
				if (nextIndex < this.products.length) {
					return { value: this.products[nextIndex++], done: false };
				} else {
					return { done: true };
				}
			},
		};
	};
}
