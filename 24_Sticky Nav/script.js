  const nav = document.querySelector('#main');
  let topOfNav = nav.offsetTop; //top of nav on page load

    function fixNav() {
      if (window.scrollY >= topOfNav) { //when we scroll to equal or just below top of nav make changes
      
        document.body.style.paddingTop = nav.offsetHeight + 'px'; //add back the nav height that was removed in reflow
        
        document.body.classList.add('fixed-nav');
        
      } else {
          
        document.body.classList.remove('fixed-nav');
        
        document.body.style.paddingTop = 0;
        
      }
    }

    window.addEventListener('scroll', fixNav);