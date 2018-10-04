
function playaudio(e) {

    const audio     = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const activeKey = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	activeKey.classList.add('playing');
    if(!audio) return;
	audio.currentTime = 0;
    audio.play();  
}


function removeTransition(e) {    
    if (e.propertyName != 'transform') return;
	const activeKey = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    e.srcElement.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key=>addEventListener('keydown',playaudio));
keys.forEach(key=>addEventListener('transitionend',removeTransition));
