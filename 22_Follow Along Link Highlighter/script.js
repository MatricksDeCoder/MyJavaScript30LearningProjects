  const triggers = document.querySelectorAll('a');
  const highlight = document.createElement('span');  
  highlight.classList.add('highlight');  
  document.body.appendChild(highlight); //add it into DOM at this stage has no width or height so not visible

  function highlightLink() {
    //figure out the width, height, position of element, translate values etc
    const linkCoords = this.getBoundingClientRect(); //used to get position, top left, width info where on page elem is
    console.log(linkCoords);
    const coords = {
      width: linkCoords.width,
      height: linkCoords.height,
      top: linkCoords.top + window.scrollY, //adjust for window scroll
      left: linkCoords.left + window.scrollX
    };

    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;

  }

  triggers.forEach(linkElem => linkElem.addEventListener('mouseenter', highlightLink));