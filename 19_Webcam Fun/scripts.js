//Photobooth with JavaScript & Canvas 
//can work only secure host
const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false }) //returns a promise (localMediaStream)
    .then(mediaStream => {  
	  let createdLink  = window.URL.createObjectURL(mediaStream);//conversion
	  video.src = createdLink;
	  video.play();
    })
    .catch(err => {
      console.error('OH NO PROBLEM TRY AGAIN!!!', err);
    });
	
}

function paintToCanvas() {
  const width = video.videoWidth;//create similar widths and heights to videoArea
  const height = video.videoHeight;
  //canvas.width = width; 
  //canvas.height = height;

   setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);//paints video onto canvas
    //can try out the manipulations below
    //let pixels = ctx.getImageData(0,0,width, height); //pixels array data
    //pixels = redEffect(pixels);
    //pixels = rgbSplit(pixels);
    //ctx.globalAlpha = 0.2; //create ghosting effect
    //pixels = greenScreen(pixels);
    // put them back
    //ctx.putImageData(pixels, 0, 0); 
  }, 20);
}

function takePhoto() {
  // played the sound
  snap.currentTime = 0;
  snap.play();

  // take the data out of the canvas
  const data = canvas.toDataURL('image/jpeg');  //base64 text representation of image
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'capturedImage');
  link.innerHTML = `<img src="${data}" alt="Captured Image" />`;
  strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 200; // RED
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
  }
  return pixels;
}

function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i - 150] = pixels.data[i + 0]; // RED
    pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
    pixels.data[i - 550] = pixels.data[i + 2]; // Blue
  }
  return pixels;
}

function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value;
  });

  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red <= levels.rmax
      && green <= levels.gmax
      && blue <= levels.bmax) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}

getVideo();
video.addEventListener('canplay', paintToCanvas);