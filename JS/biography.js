var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
let pingPong = document.getElementById("pingpong");
let snake = document.getElementById("snake");
let politicalHub = document.getElementById("politicalHub");



btn1.addEventListener("click", function(){
    var aboutMe = document.getElementById("aboutMe");
    var resume = document.getElementById("resume");
    var hobbies = document.getElementById("hobbies");
    var projects = document.getElementById("projects");
    var dDefault = document.getElementById("default");
    var academics = document.getElementById("academics")
    
    dDefault.style.display = "none";
    aboutMe.style.display = "flex";
    resume.style.display = "none";
    hobbies.style.display = "none";
    projects.style.display = "none";
    academics.style.display = "none";

});

btn2.addEventListener("click", function(){
    var aboutMe = document.getElementById("aboutMe");
    var resume = document.getElementById("resume");
    var hobbies = document.getElementById("hobbies");
    var projects = document.getElementById("projects");
    var dDefault = document.getElementById("default");
    var academics = document.getElementById("academics")

    
    dDefault.style.display = "none";
    aboutMe.style.display = "none";
    resume.style.display = "none";
    hobbies.style.display = "flex";
    projects.style.display = "none";
    academics.style.display = "none";

});

btn3.addEventListener("click", function(){
    var aboutMe = document.getElementById("aboutMe");
    var resume = document.getElementById("resume");
    var hobbies = document.getElementById("hobbies");
    var projects = document.getElementById("projects");
    var dDefault = document.getElementById("default");
    var academics = document.getElementById("academics")

    
    dDefault.style.display = "none";
    aboutMe.style.display = "none";
    resume.style.display = "none";
    hobbies.style.display = "none";
    projects.style.display = "none";
    academics.style.display = "flex";

});

btn4.addEventListener("click", function(){
    var aboutMe = document.getElementById("aboutMe");
    var resume = document.getElementById("resume");
    var hobbies = document.getElementById("hobbies");
    var projects = document.getElementById("projects");
    var dDefault = document.getElementById("default");
    var academics = document.getElementById("academics")

    
    dDefault.style.display = "none";
    aboutMe.style.display = "none";
    resume.style.display = "flex";
    hobbies.style.display = "none";
    projects.style.display = "none";
    academics.style.display = "none";

});

btn5.addEventListener("click", function(){
    var aboutMe = document.getElementById("aboutMe");
    var resume = document.getElementById("resume");
    var hobbies = document.getElementById("hobbies");
    var projects = document.getElementById("projects");
    var dDefault = document.getElementById("default");
    var academics = document.getElementById("academics")

    
    dDefault.style.display = "none";
    aboutMe.style.display = "none";
    resume.style.display = "none";
    hobbies.style.display = "none";
    projects.style.display = "flex";
    academics.style.display = "none";

});

pingPong.addEventListener("click", function(evt){
    evt.preventDefault();
    window.location.assign("pingpong.html");
    return false;
});

snake.addEventListener("click", function(evt){
    evt.preventDefault();
    window.location.assign("snake.html");
    return false;
});

politicalHub.addEventListener("click", function(evt){
    evt.preventDefault();
    window.location.assign("PoliticalHub/html/index.html");
    return false;
});