$(document).ready(function() {
	
	const slider = $('.slider');
	const leftBtn = $('.-left-button');
	const rightBtn = $('.-right-button');
	let currentState = 1;

	rightBtn.click(function() {
		if (currentState < 3) {
			currentState += 1;
			slider.addClass('-position-' + currentState);
		}
	})
	leftBtn.click(function() {
		if (currentState > 1) {
			slider.removeClass('-position-' + currentState);
			currentState -= 1;
		}
	})
})