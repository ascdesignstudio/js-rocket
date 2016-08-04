var timer = null;
var countdownNumber = 10;

// create the function
var changeState = function (state) {
	// get the element id, change the body class
	// on click, it chanes from "body-state1 .state1" to "body-state2 .state2"
	document.body.className = 'body-state' + state;
	clearInterval(timer) // stops time
	countdownNumber = 10;
	document.getElementById('countdown').innerHTML = countdownNumber;
	// countdown
	if (state == 2) {
		// we start counting down
		// to initiate the countdown, a timer must be created
		// a function was created for the timer, set interval is the actual timer
		timer = setInterval(function () {
			countdownNumber = countdownNumber -1;
			document.getElementById('countdown').innerHTML = countdownNumber; // which was the variable

			if (countdownNumber > 4 && countdownNumber <= 7) {
				// be nervous
				document.getElementById('nervous').className = 'nervous show';
			} else {
				document.getElementById('nervous').className = 'nervous';
			}

			if (countdownNumber > 1 && countdownNumber <= 4) {
				// can't wait
				document.getElementById('cant-wait').className = 'cant-wait show';
			} else {
				document.getElementById('cant-wait').className = 'cant-wait';
			}

			// to avoid a -value (-5, -6, etc)
			// write this:
			if (countdownNumber <= 0) {
				changeState(3);
			};
		}, 500); // do this every 1000 milliseconds
	// lift off!!!
	} else if (state == 3) {
		// set Timeout is like set interval but runs the function in a certain time
		var success = setTimeout(function () {
			var randomNumber = Math.round(Math.random() * 10);
			console.log(randomNumber);
			// if bigger than 5, it is a success
			if (randomNumber > 2) {
				// do something
				changeState(4); // Do it again
			} else {
				// do something else
				changeState(5); // Oh no!
			};
		}, 2000); 
	};
}