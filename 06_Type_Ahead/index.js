/* Below is a cities json file with city names and population */
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const inputArea  = document.querySelector('.search');
const suggestionsView = document.querySelector('.suggestions');

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');  
}

let dataToUse = [];

fetch(endpoint)
     .then((response) => {
		 if(response.status!=200) {
			 console.log("Problem connectin try again! ", response.status);
			 return;
		 }
		 response.json()
                 .then((data) => {
					dataToUse  = [...data];					
				 })		 
	 });


function findMatches(word,cities) {
	const regex = new RegExp(word,'ig');
	return cities.filter(item => (item.city.match(regex) || item.state.match(regex)));	
}

function displayMatches(event) {
	let searchTerm = this.value;
	let regex      = new RegExp(searchTerm,'g');
	let results = findMatches(searchTerm,dataToUse);
	
	let html =  results.map((result) => {
		return `<li><span class="name">${result.city},  ${result.state}</span>
		<span class = "population">${numberWithCommas(result.population)}</span><li>`
	}).join('');
	suggestionsView.innerHTML = html;
	
}
inputArea.addEventListener('change',displayMatches);
inputArea.addEventListener('keyup',displayMatches);

