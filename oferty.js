var box = document.querySelectorAll(".oferty");

    box[0].addEventListener("mouseup", () =>{
        tytul = box[0].querySelector(".tytulOferty")
        opis = box[0].querySelector(".opisOferty")
        tytul.classList.toggle("tytulOferty-animation");
        opis.classList.toggle("opisOferty-animation");
        console.log("siusiak")
    });

    box[1].addEventListener("mouseup", () =>{
        tytul = box[1].querySelector(".tytulOferty")
        opis = box[1].querySelector(".opisOferty")
        tytul.classList.toggle("tytulOferty-animation");
        opis.classList.toggle("opisOferty-animation");
    });

    box[2].addEventListener("mouseup", () =>{
        tytul = box[2].querySelector(".tytulOferty")
        opis = box[2].querySelector(".opisOferty")
        tytul.classList.toggle("tytulOferty-animation");
        opis.classList.toggle("opisOferty-animation");
    });

    window.addEventListener("scroll", function(){
        var header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY>600);
    })
    
    function scrollAppear(){
        const elementAnimation = document.querySelector(".oferty");
        var positionElement = elementAnimation.getBoundingClientRect().top;
        const windowHeight = window.innerHeight / 1.3;
        
    
        if(positionElement < windowHeight){
            elementAnimation.classList.add("oferty-animation");
    
        }
       
    }
    window.addEventListener('scroll' , scrollAppear);