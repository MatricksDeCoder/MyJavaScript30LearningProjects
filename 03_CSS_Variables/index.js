var inputs = document.querySelectorAll('.controls input');

/*dataset is an object with all the data-* attributes on an element in the form 
of the example e.g <h2 data-sing=10 data-cry = "Tom" ></h2> the dataset object is
dataset= {sing:10,cry:"Tom} */

function handleUpdate() {
	var suffix = this.dataset.sizing || ''; 
    document.documentElement.style.setProperty(`--${this.name}`, (this.value + suffix));//changing CSS variables by setting properties on root
	
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
