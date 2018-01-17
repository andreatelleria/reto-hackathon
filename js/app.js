$(document).ready(function(){
  setTimeout(function () {
	window.location.href = 'views/home.html';
}, 5000);
$("#typed").typed({
	strings: ["Niños Felices, Padres Felices"],
	typeSpeed: 30,
	backDelay: 500,
	loop: false,
	loopCount: false,
	callback: function () { foo(); }
});
function foo() { console.log("Callback"); }
});
