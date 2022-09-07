/*
============================================
; Title: Assignment 5.2 - Bob's Auto Repair App - cart-component.js
; Author: Professor Krasso & Ace Baugh
; Date: 09/07/2022
; Modified By: Ace Baugh
; Description: WEB 330 Bob's Auto Repair App - This creates a new 
;                 HTML element for the shopping cart and its count.
============================================
*/

class CartComponent extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `
            <i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)
      `;
	}
}

customElements.define('cart-component', CartComponent);
