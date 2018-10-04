// create program without any libraries or external API'savePreferences
// speechRecognition is a global variable that lives on top of the window in the browser..
// in Chrome it lives at webkitSpeechRecognition as a Class/Object
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

//create an instance of speech recognition

const recognition = new SpeechRecognition();

// to ensure as you speak there is population do as you have to stop to capture part of speech

recognition.interimResults = true; 

//as you speaking program populates a paragraph when you stop a new paragraph to pupolate next speech is created

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

function appendText(e) {
	
	console.log("Hello");
	//e.results is an array like object open nested item to transcript to find what said& the confidence of whats captured
    const transcript = Array.from(e.results).map(result=> result[0])
                                            .map(result=> result.transcript)
                                            .join("");
    p.textContent = transcript;
    if(e.results[0].isFinal) {
       p = document.createElement('p');
       words.appendChild(p);
    }
    //can do something to check words or sentences in transcript e.g certain keywords, phrases etc
    if(transcript.includes("stupid")) {
        console.log("dont say stupid");
    } 
    // can build programs speaking to external API e.g go get the weather, etc 
}

recognition.addEventListener('result',appendText);
recognition.addEventListener('end',recognition.start);
recognition.start(); //run the speech recognition via microphone over a server