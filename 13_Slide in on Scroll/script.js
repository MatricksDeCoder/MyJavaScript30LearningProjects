//
function debounce(func, wait = 20, immediate = true) {//control number of times function dependant on window event runs
      //function runs once every 20ms as default;
	  var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };

function checkSlide(e) {
    slidingImages.forEach(slideImage => {
        // half way through the image
        const slideInAt = window.scrollY + window.innerHeight - (slideImage.height/2);
        const top = slideImage.offsetTop; //offsetTop how far top of image is from the top of window
        // bottom of the image
        const imageBottom = top + slideImage.height;
        
        const isHalfwayDown = slideInAt > slideImage.offsetTop;
        const isNotScrolledPast = window.scrollY <= imageBottom; //check not scrolled past image
        
        if(isHalfwayDown && isNotScrolledPast) {
            slideImage.classList.add('active');
        } else {
            slideImage.classList.remove('active');
        }
    });
}   

const slidingImages = document.querySelectorAll('.slide-in');
window.addEventListener('scroll',debounce(checkSlide,100));
    
    