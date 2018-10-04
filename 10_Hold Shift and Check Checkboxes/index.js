
const checkboxes =document.querySelectorAll('.inbox input[type="checkbox"]');
//code below very good for a todolist
let lastChecked;

function handleCheck(e) {
 
// Check if they had the shift key down
// AND check that they are checking it
    let inBetween = false;
    if(e.shiftKey && this.checked) {
// go ahead and do what we please
// loop over every single checkbox inBetween
        checkboxes.forEach(box=> {
            if(box===this || box==lastChecked) {
                inBetween = !inBetween;
            }
            if(inBetween) {
                box.checked = true;
            }
        })           
    };
    lastChecked = this;
}

checkboxes.forEach(box=>{
    box.addEventListener('click',handleCheck);
});
