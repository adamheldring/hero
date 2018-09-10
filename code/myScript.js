// Adam's Play button script for hero assignment

window.onload = function() {

  var buttonSmall = document.getElementById('buttonSmall');
  var buttonMedium = document.getElementById('buttonMedium');
  var buttonBig = document.getElementById('buttonBig');

  var small = document.getElementById('videoSmall');
  var medium = document.getElementById('videoMedium');
  var big = document.getElementById('videoBig');

  function buttonPress(e) {
    var target = e.target;
      if (target.id == "buttonSmall") { //Small video
          if (small.paused) {
            small.play();
            target.value = "PAUSE";
          } else {
            small.pause();
            target.value = "PLAY";
          }
      } else if (target.id == "buttonMedium") { //Medium video
          if (medium.paused) {
            medium.play();
            target.value = "PAUSE";
          } else {
            medium.pause();
            target.value = "PLAY";
          }
      } else {
          if (big.paused) { //Big video
            big.play();
            target.value = "PAUSE";
          } else {
            big.pause();
            target.value = "PLAY";
          }
      }
  }
  buttonSmall.addEventListener('click', buttonPress);
  buttonMedium.addEventListener('click', buttonPress);
  buttonBig.addEventListener('click', buttonPress);

}
