function Stopwatch(elem) {
	// function Stopwatch() {
	var time = 0;
	var interval;
	var offset;

	function update() {
		time += delta();

		//var formattedTime=timeFormatter(time);
		var formattedTime = timeFormatter(time);
		elem.innerHTML = formattedTime.toString();
		console.log(elem);
	}

	function delta() {
		var now = Date.now();
		var timePassed = now - offset;
		offset = now;
		return timePassed;
	}

	function timeFormatter(timeInMiliseconds) {

		var time = new Date(timeInMiliseconds);
		var minutes = time.getMinutes().toString();
		var seconds = time.getSeconds().toString();
		var milliseconds = time.getMilliseconds().toString();

		if (minutes.length < 2)
			minutes = '0' + minutes;
		if (seconds.length < 2)
			seconds = '0' + seconds;

		while (milliseconds.length < 3)
			milliseconds = '0' + milliseconds;

		return minutes + ' : ' + seconds + '. ' + milliseconds;
	}


	this.isOn = false;
	this.start = function() {
		if (!this.isOn) {
			this.isOn = true;
			interval = setInterval(update, 10);
			offset = Date.now();


		}


	};
	this.stop = function() {
		if (this.isOn) {
			this.isOn = false;
			clearInterval(interval);
			interval = null;
		}
	};
	this.reset = function() {
		time = 0;

	};

}
// var watch = new Stopwatch();
