// declaring variables

var projectBtn = document.getElementById("project");
var skillBtn = document.getElementById("skill");
var designBtn = document.getElementById("designs");
var articleBtn= document.getElementById("articles");


var static = document.querySelector(".static");

var skillSet= document.querySelector(".skill-set");
var projects = document.querySelector(".projects");
var articles = document.getElementsByClassName("article-set")[0];

projectBtn.addEventListener("click", function showProject(){
    skillSet.style="display:none";
    projects.style="display:grid";
    skillBtn.style="border-bottom:none;";
    articleBtn.style="";
    projectBtn.style=" border-bottom:3px solid #1c6cae; font-weight:400;";
    articles.style="display:none;";
})

skillBtn.addEventListener("click", function showSkill(){
    skillSet.style="display:block";
    projects.style="display:none";
    articleBtn.style="";
    skillBtn.style=" border-bottom:3px solid #1c6cae; font-weight:400;";
    projectBtn.style="";
    articles.style="display:none;";
} )
articleBtn.addEventListener("click", function showArticle(){
    skillSet.style="display:none;";
    projects.style= "display:none";
    articles.style="display:grid";
    projectBtn.style="";
    skillBtn.style="border-bottom:none;";
    articleBtn.style="border-bottom:3px solid #1c6cae; font-weight:400;";
 

})

//darkMode Code

var toggleDark = document.getElementById("green");
var body = document.getElementsByTagName("body")[0];
var blob = document.getElementsByClassName("blob")[0];
var projectChild = document.querySelectorAll(".project-child").length;
var articlePost = document.querySelectorAll(".post").length;
var flag = true;

toggleDark.addEventListener("click", function(){
    if (flag){
        body.style="background:#161616; color:white;";
        blob.style="background:#202020; color:white;";
        for (i=0; i< projectChild; i++){
            document.querySelectorAll(".project-child")[i].style="box-shadow:3px 3px 9px #161616";
      };
      for (i=0; i< articlePost; i++){
        document.querySelectorAll(".post")[i].style="box-shadow:3px 3px 9px #161616";
  };
        
    }
    else{
        body.style="background:white";
        blob.style="background:white";
        for (i=0; i< projectChild; i++){
            document.querySelectorAll(".project-child")[i].style="box-shadow:2px 3px 6px rgb(214, 212, 212)";
      };
      for (i=0; i< articlePost; i++){
        document.querySelectorAll(".post")[i].style="box-shadow:2px 3px 6px rgb(214, 212, 212)";
  };
        
    }
    flag = !flag;
})


