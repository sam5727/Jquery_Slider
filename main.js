'use strict';

$(document).ready(function() {

  var AnimateSpeed = 1000;
  var IntervalSpeed = 3000;
  var width = 720;
  var PicIndex = 1;
  var Interval;

  function StartInterval(){
    Interval = setInterval(function(){
    $('.slides').animate({'margin-left': '-='+width}, AnimateSpeed,function(){
      PicIndex++;
      if(PicIndex === $('.slide').length){
        PicIndex = 1;
        $('.slides').css('margin-left', 0);
      }
    });
  },IntervalSpeed);
  }

  function StopInterval(){
    clearInterval(Interval);
  }

  

  $('#slider').hover(StopInterval, StartInterval);


  StartInterval();
});

