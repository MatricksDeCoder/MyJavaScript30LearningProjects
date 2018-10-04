const hero   = document.querySelector('.hero');
const myText = document.querySelector('.theText');
const walk = 200; // this determines how far the shadow must go/move/stretch
let xWalk;
let yWalk;

function shadow(e) {

    const {offsetWidth: width, offsetHeight: height}   = hero;
    let {offsetX: x, offsetY:y} = e; //mouse position
    //Adjust for how x changes to children elements so normalise
    if(e.target!=this) {
        x += e.target.offsetLeft;
        y += e.target.offsetTop;
    }
	
    xWalk = Math.round((x/width)*walk - (walk/2));
    yWalk = Math.round((y/width)*walk - (walk/2));
	
    myText.style.textShadow = `${xWalk*-1}px ${yWalk}px 0 rgb(255,0,0), 
                              ${xWalk}px ${yWalk}px 0 rgb(255,0,255),
                              ${xWalk}px ${yWalk*-1}px 0 rgb(220,30,255)`;
}

hero.addEventListener('mousemove',shadow);
