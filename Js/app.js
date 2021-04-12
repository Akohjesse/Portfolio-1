this.addEventListener("load", preloader);
function preloader() {
	setTimeout(funct =>{
		document.querySelector('.loader').classList.add('animate__slideOutRight')
	}, 3000)
	
	setLS();
}


var purple = 'rgb(173, 182, 215)';

$(document).ready(()=>{
	$('.tlspkpk').sticky({
		topSpacing:0,
		center:true,
		zIndex:92
	});
	
});


function setLS() {
	var check = JSON.parse(sessionStorage.getItem("check"));
	if (check === "true") {
		darkmode = true;
		$('.tlspkpk').css({'background-color':`#262626`})
		$('#hire').css({'background': `${purple}`})
		body.style = "background:#262626; color:white; transition: 1.3s;";
		blob.style = "color:white;";
		secondBtn.className = "ri-sun-fill animate__animated animate__fadeInUp animate__slow";
		secondBtn.style = "color:rgb(250, 216, 78); ";
		toggleDark.className = "ri-sun-fill animate__animated animate__fadeInUp animate__slow";
		toggleDark.style = "color:rgb(250, 216, 78); ";
		divette.style = "background-color:rgb(4,4,4);";
		document.querySelectorAll(".coloredTxt").forEach(function(individual) {
			individual.style = "color:rgb(173, 182, 215)";
		});
		document.querySelector(".jam-up").style.color = "rgb(173, 182, 215)";
		document.querySelectorAll(".stack code ul li").forEach(function(item) {
			item.style = "color:rgb(173, 182, 215)";
		});
		for (i = 0; i < projectChild; i++) {
			document.querySelectorAll(".project-child")[i].style = "box-shadow: rgb(4 4 4) 2px 1px 6px 1px";
		};
		document.querySelectorAll(".view a").forEach(function(item) {
			item.style.color = "white";
		});
		document.querySelectorAll(".ri-menu-3-fill")[0].style.color = "white";
		if (sessionStorage.getItem("check") === null) {
			var check = "true";
			sessionStorage.setItem("check", JSON.stringify("check"));
		} else {
			var check = JSON.parse(sessionStorage.getItem("check"));
			check = "true";
			sessionStorage.setItem("check", JSON.stringify(check));
		}
	} else {
		darkmode = false;
		$('.tlspkpk').css({'background-color':''})
		$('#hire').css({'background': ``})
		body.style = "background:white";
		blob.style = "background:white;";
		divette.style = "background-color: rgb(173, 182, 215)";
		secondBtn.className = "ri-moon-fill animate__animated animate__fadeInDown";
		secondBtn.style = "color:#f7f159; ";
		toggleDark.className = "ri-moon-fill animate__animated animate__fadeInDown";
		toggleDark.style = "color:#f7f159; ";
		document.querySelectorAll(".coloredTxt").forEach(function(individual) {
			individual.style = "color:orange";
		});
		document.querySelector(".jam-up").style.color = "orange";
		document.querySelectorAll(".stack code ul li").forEach(function(item) {
			item.style = "color:orange";
		});
		for (i = 0; i < projectChild; i++) {
			document.querySelectorAll(".project-child")[i].style = "box-shadow:2px 3px 6px rgb(214, 212, 212)";
		};
		document.querySelectorAll(".view a").forEach(function(item) {
			item.style.color = "#262626";
			document.querySelectorAll(".ri-menu-3-fill")[0].style.color = "black";
			if (sessionStorage.getItem("check") === null) {
				var check = false;
				sessionStorage.setItem("check", JSON.stringify("check"));
			} else {
				var check = JSON.parse(sessionStorage.getItem("check"));
				check = "false";
				sessionStorage.setItem("check", JSON.stringify(check));
			}
		})
	}
}
var projectBtn = document.getElementById("project");
var skillBtn = document.getElementById("skill");
const blob = document.getElementsByClassName("blob")[0];
var static = document.querySelector(".static");
var skillSet = document.querySelector(".skill-set");
var projects = document.querySelector(".projects");
projectBtn.addEventListener("click", function showProject() {
	skillSet.style = "display:none";
	projects.style = "display:grid";
	skillBtn.style = "border-bottom:none;";
	projectBtn.style = " border-bottom:3px solid rgb(173, 182, 215); font-weight:400;";
});
skillBtn.addEventListener("click", function showSkill() {
	skillSet.classList.add("animate__animated", "animate__zoomIn");
	skillSet.style = "display:block";
	projects.style = "display:none";
	skillBtn.style = " border-bottom:3px solid rgb(173, 182, 215); font-weight:400;";
	projectBtn.style = "";
});

var toggleDark = document.querySelectorAll("#green")[0];
var secondBtn = document.querySelectorAll('#green')[1];
var body = document.getElementsByTagName("body")[0];
var projectChild = document.querySelectorAll(".project-child").length;
var articlePost = document.querySelectorAll(".post").length;
var flag = true;
var divette = document.querySelector(".divette");
let darkmode;
toggleDark.addEventListener("click", function() {
	if (flag) {
		darkmode = true;
		$('.tlspkpk').css({'background-color':`#262626`})
		$('#hire').css({'background': `${purple}`})
		body.style = "background:#262626; color:white; transition: 1.3s;";
		blob.style = "color:white;";
		toggleDark.className = "ri-sun-fill animate__animated animate__fadeInUp animate__slow";
		toggleDark.style = "color:rgb(250, 216, 78);";
		divette.style = "background-color:rgb(4,4,4);";
		document.querySelectorAll(".coloredTxt").forEach(function(individual) {
			individual.style = "color:rgb(173, 182, 215)";
		});
		document.querySelector(".jam-up").style.color = "rgb(173, 182, 215)";
		document.querySelectorAll(".stack code ul li").forEach(function(item) {
			item.style = "color:rgb(173, 182, 215)";
		});
		for (i = 0; i < projectChild; i++) {
			document.querySelectorAll(".project-child")[i].style = "box-shadow: rgb(4 4 4) 2px 1px 6px 1px";
		};
		document.querySelectorAll(".view a").forEach(function(item) {
			item.style.color = "white";
		});
		document.querySelectorAll(".ri-menu-3-fill")[0].style.color = "white";
		if (sessionStorage.getItem("check") === null) {
			var check = "true";
			sessionStorage.setItem("check", JSON.stringify("check"));
		} else {
			var check = JSON.parse(sessionStorage.getItem("check"));
			check = "true";
			sessionStorage.setItem("check", JSON.stringify(check));
		}
	} else {
		darkmode = false;
		$('.tlspkpk').css({'background-color':``})
		$('#hire').css({'background': ``})
		body.style = "background:white";
		blob.style = "background:white;";
		divette.style = "background-color: rgb(173, 182, 215)";
		toggleDark.className = "ri-moon-fill animate__animated animate__fadeInDown";
		toggleDark.style = "color:#f7f159;";
		document.querySelectorAll(".coloredTxt").forEach(function(individual) {
			individual.style = "color:orange";
		});
		document.querySelector(".jam-up").style.color = "orange";
		document.querySelectorAll(".stack code ul li").forEach(function(item) {
			item.style = "color:orange";
		});
		for (i = 0; i < projectChild; i++) {
			document.querySelectorAll(".project-child")[i].style = "box-shadow:2px 3px 6px rgb(214, 212, 212)";
		};
		document.querySelectorAll(".ri-menu-3-fill")[0].style = "color:black";
		document.querySelectorAll(".view a").forEach(function(item) {
			item.style.color = "#262626";
			
			if (sessionStorage.getItem("check") === null) {
				var check = false;
				sessionStorage.setItem("check", JSON.stringify("check"));
			} else {
				var check = JSON.parse(sessionStorage.getItem("check"));
				check = "false";
				sessionStorage.setItem("check", JSON.stringify(check));
			}
		})
	}
	flag = !flag;
});

secondBtn.addEventListener("click", ()=>{
	if (flag) {
		darkmode = true;
		$('.tlspkpk').css({'background-color':`#262626`})
		$('#hire').css({'background': `${purple}`})
		body.style = "background:#262626; color:white; transition: 1.3s;";
		blob.style = "color:white;";
		secondBtn.className = "ri-sun-fill animate__animated animate__fadeInUp animate__slow";
		secondBtn.style = "color:rgb(250, 216, 78);";
		divette.style = "background-color:rgb(4,4,4);";
		document.querySelectorAll(".coloredTxt").forEach(function(individual) {
			individual.style = "color:rgb(173, 182, 215)";
		});
		document.querySelector(".jam-up").style.color = "rgb(173, 182, 215)";
		document.querySelectorAll(".stack code ul li").forEach(function(item) {
			item.style = "color:rgb(173, 182, 215)";
		});
		for (i = 0; i < projectChild; i++) {
			document.querySelectorAll(".project-child")[i].style = "box-shadow: rgb(4 4 4) 2px 1px 6px 1px";
		};
		document.querySelectorAll(".view a").forEach(function(item) {
			item.style.color = "white";
		});
		document.querySelectorAll(".ri-menu-3-fill")[0].style.color = "white";
		if (sessionStorage.getItem("check") === null) {
			var check = "true";
			sessionStorage.setItem("check", JSON.stringify("check"));
		} else {
			var check = JSON.parse(sessionStorage.getItem("check"));
			check = "true";
			sessionStorage.setItem("check", JSON.stringify(check));
		}
	} else {
		darkmode = false;
		$('.tlspkpk').css({'background-color':``})
		$('#hire').css({'background': ``})
		body.style = "background:white";
		blob.style = "background:white;";
		divette.style = "background-color: rgb(173, 182, 215)";
		secondBtn.className = "ri-moon-fill animate__animated animate__fadeInDown";
		secondBtn.style = "color:#f7f159;";
		document.querySelectorAll(".coloredTxt").forEach(function(individual) {
			individual.style = "color:orange";
		});
		document.querySelector(".jam-up").style.color = "orange";
		document.querySelectorAll(".stack code ul li").forEach(function(item) {
			item.style = "color:orange";
		});
		for (i = 0; i < projectChild; i++) {
			document.querySelectorAll(".project-child")[i].style = "box-shadow:2px 3px 6px rgb(214, 212, 212)";
		};
		document.querySelectorAll(".ri-menu-3-fill")[0].style = "color:black";
		document.querySelectorAll(".view a").forEach(function(item) {
			item.style.color = "#262626";
			
			if (sessionStorage.getItem("check") === null) {
				var check = false;
				sessionStorage.setItem("check", JSON.stringify("check"));
			} else {
				var check = JSON.parse(sessionStorage.getItem("check"));
				check = "false";
				sessionStorage.setItem("check", JSON.stringify(check));
			}
		})
	}
	flag = !flag;
});


const toggleNav = document.querySelectorAll(".ri-menu-3-fill")[0].addEventListener("click", openMenu);
var jesse = true;

function openMenu() {
	if (jesse) {
		var menuBar = document.querySelector(".menu-bar");
		$('.container_full').css({'overflow':'hidden'});
		menuBar.style.display = "flex";
		this.style.color = "white";
		this.className = "ri-close-line";
	} else {
		var menuBar = document.querySelector(".menu-bar");
		menuBar.style.display = "none";
		$('.container_full').css({'overflow':''});
		if (!darkmode) {
			this.style.color = "black";
		} else {
			this.style.color = "white";
		};
		this.className = "ri-menu-3-fill";
	}
	jesse = !jesse;
}

changeJamUpContent();

function changeJamUpContent() {
	var jamUpList = ["Music🎤", "Jazz🎺", "Funk🎷", "AfroSoul🍂", "Highlife🌴", "SnarkyPuppy🎸"];
	var jamUp = document.querySelector(".jam-up");
	var counter = 0;
	var flag = true;
	var myself = new Audio('Additives/myself.mp3');
	setInterval(cjmp, 500);

	function cjmp() {
		jamUp.innerText = jamUpList[counter];
		counter++;
		if (counter >= jamUpList.length) {
			counter = 0;
		}
	}
	jamUp.addEventListener("click", function() {
		if (flag) {
			myself.play();
		} else {
			myself.pause();
		}
		flag = !flag;
	})
}

