// REFRESH PAGE WITH A CLICK OF A BTN
function refreshPage() {
	window.location.reload();
}

/***********************************************************************************/

// DOM
let pixelsToPointsInput = document.getElementById('pixels');
let pointsToPixelsInput = document.getElementById('points');
let domResult = document.getElementById('dom-result');

// RESULT VARIABLES
let px = 'pixels';
let pt = 'points';

/***********************************************************************************/

let convertPixelsToPoints = () => {
	let inputedPixels = document.getElementById('pixels').value;
	pixelsInputed = inputedPixels;
	result = pixelsInputed * (72 / 96);

	if (result == 0) {
		domResult.innerText = '';
	} else {
		domResult.innerText = `${result} ${pt}`;
	}
};

convertPixelsToPoints();

/***********************************************************************************/

let convertPointsToPixels = () => {
	let inputedPoints = document.getElementById('points').value;
	pointsInputed = inputedPoints;
	result = pointsInputed / (72 / 96);

	if (result == 0) {
		domResult.innerText = '';
	} else {
		domResult.innerText = `${result} ${px}.`;
	}
};

convertPointsToPixels();
