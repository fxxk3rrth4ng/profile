var dday = new Date("January 1, 2003, 0:00:00").getTime();

setInterval(function () {
	var today = new Date().getTime();
	var gap = today - dday;
	var age = Math.floor((gap / (1000 * 60 * 60 * 24 * 365)) * 10) / 10 + 1;

	document.getElementById("count").innerHTML = age + "세 (2003년생)";
}, 1000);
