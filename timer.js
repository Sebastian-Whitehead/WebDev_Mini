function makeTimer() {

	var CountDownDate = new Date("June 6, 2023 16:00:00").getTime();		
	var x = setInterval(function() {

		var currentdate = new Date().getTime();
		var timeleft = CountDownDate - currentdate;
	  
		var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
		var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
	  
		document.getElementById("countdown").innerHTML = "!! " + days + "d " + hours + "h "
		+ minutes + "m " + seconds + "s !!";
	  
		if (timeleft < 0) {
		  clearInterval(x);
		  document.getElementById("countdown").innerHTML = "Exam over!";
		}
	  }, 1000);

	}


makeTimer();

