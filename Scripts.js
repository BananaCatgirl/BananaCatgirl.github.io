window.onscroll = function () { scrollFunction() };

function scrollFunction() {
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		document.getElementById("topnav").style.padding = "10px 10px";
	} else {
		document.getElementById("topnav").style.padding = "30px 10px";
	}
}
