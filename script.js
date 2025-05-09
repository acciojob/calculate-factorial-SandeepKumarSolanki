//your JS code here. If required.

function factorial(){
	let a = prompt("Enter a number");
	a = +a;
	let f = 1;
	for(let i=1 ; i<=a ; i++){
		f *= i;
	}
	alert(`The factorial of ${a} is ${f}`)
}

factorial()