var timer = document.getElementById('timer');
var toggeButton = document.getElementById('toggle');
var resetButton = document.getElementById('reset');

var watch = new Stopwatch(timer);
toggeButton.addEventListener('click', function() {
	if (watch.isOn) {
		watch.stop();

	} else {
		watch.start();
	}
});

resetButton.addEventListener('click', function() {
	watch.reset();
});
console.log('hi');
