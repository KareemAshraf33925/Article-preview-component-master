var share=document.querySelector(".share");
var social=document.querySelector(".social");


function Alertsocial(){
    if(social.classList.contains("active")){
        social.classList.remove("active");
    }else{
        social.classList.add("active");
    }
}