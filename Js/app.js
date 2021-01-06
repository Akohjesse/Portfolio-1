// declaring variables
this.addEventListener("load", preloader);

function preloader(){
    var loader = document.querySelector(".loader");
    setTimeout(5000, del());
    function del(){
        loader.classList.add("animate__animated", "animate__slideOutLeft", "animate__delay-1s");
    }

    var loader2 = document.querySelector(".loader2");
    setTimeout(5000, del2());
    function del2(){
        loader2.classList.add("animate__animated", "animate__slideOutUp", "animate__delay-4s");
    }

    var loader3 = document.querySelector(".loader3");
    setTimeout(5000, del3());
    function del3(){
        loader3.classList.add("animate__animated", "animate__slideOutRight","animate__delay-3s" );
    }
}



//Nav Bar on click
var  toggleNav= document.querySelectorAll(".ri-menu-3-fill")[0].addEventListener("click", openMenu);
var jesse = true;
function openMenu(){
   if (jesse){
       
       var menuBar = document.querySelector(".menu-bar");
   menuBar.style.display= "flex";
   this.style.color="white";
   this.className= "ri-close-line";
   document.querySelector(".logo").style.color="white";
   }
   else{
       var menuBar = document.querySelector(".menu-bar")
       menuBar.style.display="none";
       this.style.color="black";
       this.className= "ri-menu-3-fill";  
       document.querySelector(".logo").style.color="";
   }
   jesse = !jesse;

}

document.querySelector(".logo").addEventListener("click", function(){
   var menuBar = document.querySelector(".menu-bar");
       menuBar.style= "display:none;";
       // document.querySelectorAll(".ri-menu-3-fill")[0].style="color:black";
       document.querySelectorAll(".ri-close-line")[0].className= "ri-menu-3-fill";
       document.querySelectorAll(".ri-menu-3-fill")[0].style="color:black";
})
document.getElementById("home_btn").addEventListener("click", function(){
   var menuBar = document.querySelector(".menu-bar");
      
   menuBar.style= "display:none;";
   // document.querySelectorAll(".ri-menu-3-fill")[0].style="color:black";
   document.querySelectorAll(".ri-close-line")[0].className= "ri-menu-3-fill";
   document.querySelectorAll(".ri-menu-3-fill")[0].style="color:black";
})



// nav bar in desktop mode

var projectBtn = document.getElementById("project");
var skillBtn = document.getElementById("skill");
var designBtn = document.getElementById("designs");

const blob = document.getElementsByClassName("blob")[0];
var static = document.querySelector(".static");
var skillSet= document.querySelector(".skill-set");
var projects = document.querySelector(".projects");



projectBtn.addEventListener("click", function showProject(){
    skillSet.style="display:none";
    projects.style="display:grid";
    skillBtn.style="border-bottom:none;";
  
    projectBtn.style=" border-bottom:3px solid rgb(241, 146, 233); font-weight:400;";
   
    
})

skillBtn.addEventListener("click", function showSkill(){
    skillSet.classList.add("animate__animated" , "animate__zoomIn");

    skillSet.style="display:block";
   
    projects.style="display:none";
 
    skillBtn.style=" border-bottom:3px solid rgb(241, 146, 233); font-weight:400;";
    projectBtn.style="";
   
} )




//darkMode Code

var toggleDark = document.getElementById("green");
var body = document.getElementsByTagName("body")[0];
var projectChild = document.querySelectorAll(".project-child").length;
var articlePost = document.querySelectorAll(".post").length;
var flag = true;
var divette = document.querySelector(".divette");


toggleDark.addEventListener("click", function(){
    if (flag){
        body.style="background:#161616; color:white; transition: 1.3s;";
        blob.style="color:white;";
        toggleDark.className="fas fa-moon animate__animated animate__fadeInUp animate__slow";
        toggleDark.style="color:#f7f159; transform:rotateZ(320deg)";
        divette.style="background-color:rgb(4,4,4);";
        document.querySelectorAll(".portText .intro p span").forEach(function(individual){
             individual.style="color:rgb(241, 146, 233)";
            })
        document.querySelector(".jam-up").style.color="rgb(241, 146, 233)";



        document.querySelectorAll(".stack code ul li").forEach(function(item){
              item.style="color:orange";
        })

        for (i=0; i< projectChild; i++){
            document.querySelectorAll(".project-child")[i].style="box-shadow: rgb(4 4 4) 2px 1px 6px 1px";
        };
        document.querySelectorAll(".view a").forEach(function(item){
            item.style.color="white";
        })
        
        document.querySelectorAll(".ri-menu-3-fill")[0].style.color="white";
    }
    else{
        body.style="background:white";
        blob.style="background:white;";
        divette.style="background-color: rgb(241, 146, 233)";
        toggleDark.className="fas fa-cloud-sun animate__animated animate__fadeInDown";
        toggleDark.style="color:orange; transform:rotateZ(320deg)";
        document.querySelectorAll(".portText .intro p span").forEach(function(individual){
            individual.style="color:orange";
        })
        document.querySelector(".jam-up").style.color="orange";
        document.querySelectorAll(".stack code ul li").forEach(function(item){
            item.style="color:rgb(241, 146, 233)";
      })

        for (i=0; i< projectChild; i++){
            document.querySelectorAll(".project-child")[i].style="box-shadow:2px 3px 6px rgb(214, 212, 212)";
      };
      for (i=0; i< articlePost; i++){
        document.querySelectorAll(".post")[i].style="box-shadow:2px 3px 6px rgb(214, 212, 212)";
     };


     document.querySelectorAll(".view a").forEach(function(item){
        item.style.color="#161616";
    })
        
        
    }
    flag = !flag;
})



//manipulating the text in the more text field


changeJamUpContent();

function changeJamUpContent(){
    var jamUpList = ["Music🎤", "Jazz🎺", "Funk🎷", "AfroSoul🍂", "Highlife🌴" ,"SnarkyPuppy🎸" ];
    var jamUp = document.querySelector(".jam-up");
    var counter = 0;
    var flag = true;
    var myself = new Audio('Additives/myself.mp3');
    setInterval(cjmp,500); 
    function cjmp () {
   
        jamUp.innerText=jamUpList[counter];
        counter++;
        if (counter >= jamUpList.length){
            counter=0;
        }
    }
    jamUp.addEventListener("click", function(){
  
        if (flag){
            myself.play();
            console.log("i dot");
        }
        else{
            myself.pause();   
            console.log("i dgsbssddot");
        }
        flag =!flag;
    })
   

}

