//Event Propagation, Event Bubbling, Event Capture
//clicks are triggered up on the elements due to nesting bubbles all the way to the top
//Captur phase isfromtop to bottom and bubble from bottom to top
const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(e) {
    console.log(this.classList.value);
    //e.stopPropagation(); // stop bubbling up!
    //console.log(this);
}

divs.forEach(div => div.addEventListener('click', logText, {//options object
    capture: false,//event is run on the capture down phase instead of bubble phase-default is false
    once: true  //unbind is like removeEventListener; when click again nothing happens
}));

button.addEventListener('click', () => {
    console.log('Click!!!');
  }, {
    once: true //run once  e.g store checkouts
});
  