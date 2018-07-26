var navbar;
var navheader;
var navbarY;
var navmarker;
var containerRect;
var belownav;
var setupFinished = false;
var containers;
var links;
var contactform;

function setup() {
	navbar = document.getElementById("navbar");
	navheader = document.getElementById("navheader");
	belownav = document.getElementById("belownav");
	navmarker = document.getElementById("navmarker");
	containers = document.getElementsByClassName("container");
	links = document.getElementsByClassName("link");
	contactform =  document.getElementById('contactform');
	contactform.setAttribute('action', 'https://formspree.io/' + 'javan' + '.' +'graham' + '@' + 'mail' + '.' + 'utoronto' + '.' + 'ca');
	navbarY = navbar.offsetTop;
	setupFinished = true;
	attatchNavbar();
}

window.onscroll = function(){
	attatchNavbar();
};

function attatchNavbar() {
	if(setupFinished){
		if(window.innerWidth < 768){
			navbar.classList.add("sticky");
			navbar.classList.add("navbar-fixed-top");
			navheader.classList.add("hidden");
			for(var i = 0; i < containers.length; i++){
				containers[i].classList.add("navpad");
			}
		}else{
			if (window.pageYOffset >= navbarY) {
		    navbar.classList.add("sticky");
		   	navbar.classList.add("navbar-fixed-top");
		   	navheader.classList.remove("hidden");
		   	belownav.classList.add("navpad");
		  } else {
		    navbar.classList.remove("sticky");
		   	navbar.classList.remove("navbar-fixed-top");
		    navheader.classList.add("hidden");
		    belownav.classList.remove("navpad");
		  }
		}
	}
}

window.onresize = function(){
	if(setupFinished){
		navbarY = navmarker.offsetTop;
		if(window.innerWidth >= 768){
			for(var i = 0; i < links.length; i++){
				links[i].setAttribute("data-toggle", "");
				links[i].setAttribute("data-target", "");
			}
			for(var i = 0; i < containers.length; i++){
				containers[i].classList.remove("navpad");
			}
		}else{
			for(var i = 0; i < links.length; i++){
				links[i].setAttribute("data-toggle", "collapse");
				links[i].setAttribute("data-target", "#navlinks");
			}
		}
		attatchNavbar();
	}
};