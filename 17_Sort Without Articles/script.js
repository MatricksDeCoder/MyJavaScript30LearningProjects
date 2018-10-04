const bands = [
'The Plot in You', 
'The Devil Wears Prada', 
'Pierce the Veil', 
'Norma Jean', 
'The Bled', 
'Say Anything', 
'The Midway State', 
'We Came as Romans', 
'Counterparts', 
'Oh, Sleeper', 
'A Skylit Drive', 
'Anywhere But Here', 
'An Old Dog'];

//sort the above bands without The or An or A in front
//Add the sorted names above as is into the HTML


function strip(string) {
    return string.replace(/^(a |an |the)/i,'').trim();
}

/*
const sortedBands = bands.sort((a,b)=> {
    if(strip(a)>strip(b)) {
        return 1;
    } else {
        return -1;
    }       
})
*/

//shorter ES6 code below
const sortedBands = bands.sort((a,b)=>strip(a)>strip(b)?1:-1);

const bandsHTML = document.querySelector('#bands');

bandsHTML.innerHTML = sortedBands.map(band => {
    return `
        <li>${band}</li>
    `;
}).join('');