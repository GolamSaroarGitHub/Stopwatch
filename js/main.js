var timer1=document.getElementById('timer');
var toggeButton=document.getElementById('toggle');
var resetButton=document.getElementById('reset');

var watch=new Stopwatch(timer1);
toggeButton.addEventListener('click',function(){
  if (watch.isOn) {
    watch.stop();

  }
  else {
    watch.start();
  }
});

resetButton.addEventListener('click',function() {
  watch.reset();
});
console.log('hi');
