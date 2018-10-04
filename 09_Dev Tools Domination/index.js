const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

const p = document.querySelector('p');
function makeGreen() {            
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }
//Find out what is happening with p-element //Right-click element click on Breakon - Attribute modifications
//when you click element it will pop in a debugger and you can go through it to see..
// when finished removed the breakpoint


    // Regular console.logs
    console.log("Hello");
    console.table({"hello":"Timmy"});

    // Interpolated
    console.log("Hello my name is %s", "James"); //C/C++ type
    var name = "James";
    console.log(`Hello my name is ${name}`) //ES6 type
    
    // Styled
    console.log("%c I am styled text", "font-size:20px; color:blue")
    // warning!
    console.warn("DANGER!")
    // Error :|
    console.error("DANGER")
    // Info
    console.info("JavaScript is the Best!")  //gives you the little info icon
    // Testing
    console.assert(1===2,"That is wrong")//only fires if test fails,first argument results to false
    // clearing
          //console.clear() //clears the console
    // Viewing DOM Elements
    console.dir(p) //gives you a dropdown to inspect element properties etc
    // Grouping together  console.group() and console.groupCollapsed()
    dogs.forEach(dog=> {
    console.group(`${dog.name}`);
      //console other info it will be listed for each group
    console.groupEnd(`${dog.name}`);
    });
    // counting
    console.count("Hi");
    console.count("Ho");
    console.count("Ola");
    console.count("Ola");
    console.count("Hi");
    console.count("Ho");
    // timing
   console.time("working a loop");
   var result = 0
   for(i=0;i<100000000;i++) {
    result+=i;   
   }
   console.log(result);
   console.timeEnd("working a loop");