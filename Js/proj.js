const body = document.getElementsByTagName("body")[0];
let darkmode;
autoColor();
window.addEventListener("mouseover", function() {
	if (window.innerWidth > 765) {
		window.location.href = "https://ferventdev.netlify.app";
	};
});

function autoColor() {
	var check = JSON.parse(sessionStorage.getItem("check"));
	if (check === "true") {
		document.querySelectorAll(".coloredTxt").forEach(function(individual) {
			individual.style = "color:rgb(173, 182, 215)";
		});
		var toggleDark = document.getElementById("green");
		$('.tlspkpk').css({'background-color':`#262626`})
		var projectChild = document.querySelectorAll(".project-child").length;
		var flag = true;
		var divette = document.querySelector(".divette");
		body.style = "background-color:#262626;color:white;";
		darkmode = true;
		body.style = "background:#262626; color:white; transition: 1.3s;";
		toggleDark.className = "ri-sun-fill animate__animated animate__fadeInUp animate__slow";
		toggleDark.style = "color:rgb(250, 216, 78);";
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
		document.querySelectorAll(".coloredTxt").forEach(function(individual) {
			individual.style = "color:orange";
		});
		var toggleDark = document.getElementById("green");
		$('.tlspkpk').css({'background-color':``})
		var projectChild = document.querySelectorAll(".project-child").length;
		var flag = true;
		body.style = "background:white";
		document.querySelectorAll(".ri-menu-3-fill")[0].style.color = "black";
		document.querySelector(".logo").style.color = "black";
		toggleDark.className = "ri-moon-fill animate__animated animate__fadeInDown";
		toggleDark.style = "color:#f7f159;";
		document.querySelectorAll(".stack code ul li").forEach(function(item) {
			item.style = "color:orange";
		});
		for (i = 0; i < projectChild; i++) {
			document.querySelectorAll(".project-child")[i].style = "box-shadow:2px 3px 6px rgb(214, 212, 212)";
		};
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
		});
		darkmode = false;
	}
}
var toggleNav = document.querySelectorAll(".ri-menu-3-fill")[0].addEventListener("click", openMenu);
var jesse = true;

function openMenu() {
	if (jesse) {
		var menuBar = document.querySelector(".menu-bar");
		menuBar.style.display = "flex";
		this.style.color = "white";
		this.className = "ri-close-line";
		document.querySelector(".logo").style.color = "white";
		$('.container_full').css({'overflow':'hidden'});
	} else {
		if (!darkmode) {
			this.style.color = "black";
		} else {
			this.style.color = "white";
		};
		var menuBar = document.querySelector(".menu-bar");
		menuBar.style.display = "none";
		$('.container_full').css({'overflow':''});
	
		this.className = "ri-menu-3-fill";
	}
	jesse = !jesse;
}
intDark();
$(document).ready(()=>{
	$('.tlspkpk').sticky({
		topSpacing:0,
		center:true,
		zIndex:92,
	})
})

function intDark() {
	var toggleDark = document.getElementById("green");
	var projectChild = document.querySelectorAll(".project-child").length;
	var flag = true;
	toggleDark.addEventListener("click", function() {
		if (flag) {
			document.querySelectorAll(".coloredTxt").forEach(function(individual) {
				individual.style = "color:rgb(173, 182, 215)";
			});
			darkmode = true;
			$('.tlspkpk').css({'background-color':`#262626`})
			body.style = "background:#262626; color:white; transition: 1.3s;";
			toggleDark.className = "ri-sun-fill animate__animated animate__fadeInUp animate__slow";
		    toggleDark.style = "color:rgb(250, 216, 78);";
              
			document.querySelectorAll(".stack code ul li").forEach(function(individual) {
				individual.style = "color:rgb(173, 182, 215)";
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
		   }
		  else {
			darkmode = false;
			document.querySelectorAll(".coloredTxt").forEach(function(individual) {
				individual.style = "color:orange";
			});
			body.style = "background:white";
			$('.tlspkpk').css({'background-color':``})
			document.querySelectorAll(".ri-menu-3-fill")[0].style.color = "black";
			
			document.querySelector(".logo").style.color = "black";
			toggleDark.className = "ri-moon-fill animate__animated animate__fadeInDown";
	     	toggleDark.style = "color:#f7f159; ";
			 document.querySelectorAll(".stack code ul li").forEach(function(individual) {
				individual.style = "color:orange";
			});
			for (i = 0; i < projectChild; i++) {
				document.querySelectorAll(".project-child")[i].style = "box-shadow:2px 3px 6px rgb(214, 212, 212)";
			};
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
	})
}