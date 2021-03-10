var counter = 1;
document.getElementById('radio' + counter).checked = true;

setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    //document.getElementById('radio' + counter).checked = true;
    if(counter > 4){
        counter=1;
    }
},5000);



window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY>600);
})

function scrollAppear(){
    const elementAnimation = document.querySelector(".coOferujemy");
    var positionElement = elementAnimation.getBoundingClientRect().top;
    const windowHeight = window.innerHeight / 1.3;
    

    if(positionElement < windowHeight){
        elementAnimation.classList.add("coOferujemy-animation");

    }
   
}
window.addEventListener('scroll' , scrollAppear);