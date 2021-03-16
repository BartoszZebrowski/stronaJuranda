const navSlide = () => {
    const lines = document.querySelectorAll("line");
    const burger = document.querySelector(".hamburger");
    const nav = document.querySelector("header ul");
    const body = document.querySelector("body");
    console.log(nav);

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
        if(document.querySelector('.nav-active'))
        {
            body.style.overflowY = 'hidden';
        }
        else{
            body.style.overflowY = `scroll`;
        }
        burger.classList.toggle("hamburger-active");
       // burger.classList.toggle("hamburger-animation div");
        lines.classList.toggle("hamburger-animation");
    })
}
navSlide();