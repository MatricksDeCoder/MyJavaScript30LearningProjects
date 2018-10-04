  const slider = document.querySelector('.items');
  let isDown = false; //if we are clicking or not
  let startX; //captures position of initial click
  let scrollLeft;
  
  //on clickdown on an item we must add class of active
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  
  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  
  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');    
    startX = e.pageX - slider.offsetLeft;  //x position adjusted for margin/pos etc
    scrollLeft = slider.scrollLeft; //initial scroll
  });

 

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;  // stop the fn from running    
    e.preventDefault();    
    const x = e.pageX - slider.offsetLeft;//where is after scroll
    
    const walk = (x - startX) * 3; //deviation from initial click position times a number tomake it faster or slower
    slider.scrollLeft = scrollLeft - walk;
  });
  