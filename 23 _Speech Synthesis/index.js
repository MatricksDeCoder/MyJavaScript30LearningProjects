//SpeechSyntethesis API comes with most mordern browsers  for a text to voice program

  const msg = new SpeechSynthesisUtterance(); 
  let voices = [];
  const voicesDropdown = document.querySelector('[name="voice"]');
  const options = document.querySelectorAll('[type="range"], [name="text"]');
  const speakButton = document.querySelector('#speak');
  const stopButton = document.querySelector('#stop');
  msg.text = document.querySelector('[name="text"]').value;


  function populateVoices() {
      
    voices = this.getVoices(); //voice options from system to populate our voice array
    voicesDropdown.innerHTML = voices
      .filter(voice => voice.lang.includes('en')) //filter for en language only can change as you wish //create button etc to select
      .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
      .join('');
  }

  function setVoice() {
    msg.voice = voices.find(voice => voice.name === this.value);//find corresponding SpeechSynthesis voice object to the name
    
    toggle();
  }

  function toggle(startOver = true) {
    speechSynthesis.cancel();//stop any currently speaking message
    if (startOver) {
      speechSynthesis.speak(msg);
    }
  }

  function setOption() {
    console.log(this.name, this.value);
    msg[this.name] = this.value;
    toggle();
  }

  speechSynthesis.addEventListener('voiceschanged', populateVoices); //global variable speechSynthesis.speak(msg)--pass utterance  
  voicesDropdown.addEventListener('change', setVoice);//change voice when we change the dropdown options
  
  stopButton.addEventListener('click', () => toggle(false)); // or toggle.bind(null,false) 
  speakButton.addEventListener('click', toggle);
  
  options.forEach(anOption => anOption.addEventListener('change', setOption));
  
  
  
  