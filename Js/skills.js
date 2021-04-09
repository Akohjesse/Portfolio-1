

const body = document.getElementsByTagName("body")[0];
let darkmode;
autoColor();
window.addEventListener("mouseover", function() {
	if (window.innerWidth > 765) {
		window.location.href = "ferventdev.netlify.app";
	};
});

function autoColor() {
	var check = JSON.parse(sessionStorage.getItem("check"));
	if (check === "true") {
		var toggleDark = document.getElementById("green");
	
		var flag = true;
	
		var cont = document.querySelector(".container");
		darkmode = true;
		body.style = "background:#262626; color:white; transition: 1.3s;";
        toggleDark.className = "ri-sun-fill animate__animated animate__fadeInUp animate__slow";
		toggleDark.style = "color:rgb(250, 216, 78);";
		
		cont.style = "box-shadow: 2px 1px 20px 5px #0d0c0c;";
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
		var toggleDark = document.getElementById("green");
		var projectChild = document.querySelectorAll(".project-child").length;
		var flag = true;
	var cont = document.querySelector(".container");
		darkmode = false;
		body.style = "background:white";
	
		toggleDark.className = "ri-moon-fill animate__animated animate__fadeInDown";
		toggleDark.style = "color:#f7f159;";
		cont.style = "box-shadow: 2px 1px 20px 5px grey;";
	
			if (sessionStorage.getItem("check") === null) {
				var check = false;
				sessionStorage.setItem("check", JSON.stringify("check"));
			} else {
				var check = JSON.parse(sessionStorage.getItem("check"));
				check = "false";
				sessionStorage.setItem("check", JSON.stringify(check));
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
		} else {
			var menuBar = document.querySelector(".menu-bar");
			menuBar.style.display = "none";
			if (!darkmode) {
				this.style.color = "black";
			} else {
				this.style.color = "white";
			};
			this.className = "ri-menu-3-fill";
		}
		jesse = !jesse;
	};
	
	intDark();

	function intDark() {
		var toggleDark = document.getElementById("green");
		var projectChild = document.querySelectorAll(".project-child").length;
		var flag = true;
		var cont = document.querySelector(".container");
		toggleDark.addEventListener("click", function() {
			if (flag) {
				darkmode = true;
				body.style = "background:#262626; color:white; transition: 1.3s;";
				toggleDark.className = "ri-sun-fill animate__animated animate__fadeInUp animate__slow";
		        toggleDark.style = "color:rgb(250, 216, 78);";
				cont.style = "box-shadow: 2px 1px 20px 5px #0d0c0c;";
				
				
				document.querySelectorAll(".ri-menu-3-fill")[0].style.color = "white";
				if (sessionStorage.getItem("check") === null) {
					var check = "true";
					sessionStorage.setItem("check", JSON.stringify("check"));
				} else {
					var check = JSON.parse(sessionStorage.getItem("check"));
					check = "true";
					sessionStorage.setItem("check", JSON.stringify(check));
				};
			} else {

				darkmode = false;
				document.querySelectorAll(".ri-menu-3-fill")[0].style.color = "black";
				body.style = "background:white";
				toggleDark.className = "ri-moon-fill animate__animated animate__fadeInDown";
	     	    toggleDark.style = "color:#f7f159; ";
				cont.style = "box-shadow: 2px 1px 20px 5px grey;";		
					if (sessionStorage.getItem("check") === null) {
						var check = false;
						sessionStorage.setItem("check", JSON.stringify("check"));
					} else {
						var check = JSON.parse(sessionStorage.getItem("check"));
						check = "false";
						sessionStorage.setItem("check", JSON.stringify(check));
					}
			}
			flag = !flag;
		})
	}
};