/*
============================================
; Title: Assignment #.# theme.css
; Author: Professor Krasso & Ace Baugh
; Date: 08/20/2022
; Modified By: Ace Baugh
; Description: This takes the code that would 
;					be found at the bottom of each 
;					page in the script tags and moves 
;					it to a file to be called instead 
;					of clutterng up the HTML file.
;============================================
*/

/**
 * Set the default theme to light if one has not been set in the browsers localStorage
 */
setDefaultTheme();

/**
 * Function to switch the users selected website theme
 * @param x (this instance)
 */
function toggleMode(x) {
	let colorTheme = document.body.classList; // get the body's CSS class
	let iconMode = x.classList; // get the current classes assigned to the triggered button

	/**
	 * If the current body class is set to the light-theme, update the user's preference to the dark-theme in the browsers
	 * local storage.
	 */
	if (colorTheme.value === 'light-theme') {
		localStorage.clear();
		localStorage.setItem('mode', 'dark-theme');
		localStorage.setItem('iconMode', 'fa-toggle-on');
		localStorage.setItem('iconText', 'Dark Mode');
	} else {
		/**
		 * If the current body class is set to the dark-theme, update the user's preference to the light-theme in the browsers
		 * local storage.
		 */
		localStorage.clear();
		localStorage.setItem('mode', 'light-theme');
		localStorage.setItem('iconMode', 'fa-toggle-off');
		localStorage.setItem('iconText', 'Light Mode');
	}

	/**
	 * Apply the updated selection to the HTML page elements
	 */
	colorTheme.value = localStorage.getItem('mode');
	iconMode.value = `fa ${localStorage.getItem('iconMode')} pull-right`;
	document.getElementById('icon-text').innerHTML = localStorage.getItem('iconText');
}

/**
 * Function to clear the browsers localStorage and set the default theme to light-theme.
 * This function is for demonstration purposes only and does not need to be included in any of your solutions.
 */
function clearLocalStorage() {
	localStorage.clear();
	document.body.classList.value = 'light-theme';
	document.getElementById('icon-text').innerHTML = 'Light Mode';
	document.getElementById('icon-mode').classList.value = 'fa fa-toggle-off pull-right';
}
