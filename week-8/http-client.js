/*
============================================
; Title: Assignment 8.2 - What-a-book App - http-client.css
; Author: Professor Krasso & Ace Baugh
; Date: 09/28/2022
; Modified By: Ace Baugh
; Description: WEB 330 What-A-Book App
;              This is the http-client.js file
;              it calls to the api and returns the data
============================================
*/ 

export class HttpClient {
	async get(url, params = '') {
		url = new URL(url);
		url.search = new URLSearchParams(params);

		const res = await fetch(url.toString(), {
			method: 'GET',
		});

		return res.json();
	}
}
