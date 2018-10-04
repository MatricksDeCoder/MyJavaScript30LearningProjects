
const timeNodes = document.querySelectorAll('[data-time]');
const timeNodesArray = Array.from(timeNodes);
const timesStr  = timeNodesArray.map(node=>node.dataset.time);
const minSecs = timesStr.map(str=>str.split(":"));
const seconds = minSecs.map(minSecArr=>parseFloat(minSecArr[0])*60+ parseFloat(minSecArr[1]));
const totalSeconds = seconds.reduce((a,b)=>a+b,0);

let secondsLeft = totalSeconds;
const hours = Math.floor(secondsLeft/(60*60));
secondsLeft = secondsLeft%3600;

const minutes = Math.floor(secondsLeft/60);
secondsLeft = secondsLeft%60;

console.log(hours, minutes, secondsLeft);





                                        
