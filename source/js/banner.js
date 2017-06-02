$(document).ready(function() {
  function setRandomPhrase() {
    // Set phrases into an array
    var phrases = new Array(
      "Welkom",
      "Benvido",
      "Ongi etorri",
      "добро пожаловать",
      "환영합니다"
    );

    // Selects a random phrase
    var random = Math.floor(Math.random()*phrases.length);

    while (phrases[random] == $("#phrase").text())
      {
         var random = Math.floor(Math.random()*phrases.length);
      }
    // Sets the area to use that random phrase
    $("#phrase").fadeOut('slow',function(){$("#phrase").text(phrases[random]).fadeIn('slow')});

  }
  
  // Fire the function every 5 seconds...
  setInterval(setRandomPhrase,3400);
});