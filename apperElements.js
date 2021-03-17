class apperElements {
    
    constructor(element, elementAnimation)
    {
        this.element =  element;
        this.elementAnimation = elementAnimation;
    }

    display(){
        
        let element = document.querySelector(${this.element});
        console.log(element); 
        var positionElement = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight / 1.3;
        if(positionElement < windowHeight){
            element.classList.add(this.elementAnimation);
    
        }
    }

}

const a = new apperElements(".oferty", "oferty-animation");
a.display();
window.addEventListener('scroll',()=>{a.display()});
let b = new apperElements(".oNas", "oNas-animation");
window.addEventListener('scroll',()=>{b.display()});