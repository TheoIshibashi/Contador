const display = document.getElementById("currentNumber");
let = number = document.getElementById("currentNumber").innerText;
number = parseInt(number);

const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");

increase.addEventListener("click", () => {
	if(number < 10){
		number += 1;
		display.innerText = `${number}`;
	}else{
		alert("Limite atingido");
	}
	
});

decrease.addEventListener("click", () => {
	if(number > -10){
		number -= 1;
		display.innerText = `${number}`;
	}else{
		alert("Limite atingido");
	}	
	});

reset.addEventListener("click", () => {
	number = 0;
	display.innerText = `${number}`;
});
	



/*
if (count > -10) {
    count-- // count = count - 1;
	CURRENT_NUMBER.innerHTML = count;
} else {
	alert("Voce atingiu limite");
}

if (count < 10) {
    count++ // count = count + 1;
	CURRENT_NUMBER.innerHTML = count;
} else{
	alert("Voce atingiu limite");
}









*/




/*
}
const CURRENT_NUMBER = document.getElementById('currentNumber');
	function increment() {
	if(count < 10){
		count++
		CURRENT_NUMBER.innerHTML = count;
	}else{
		alert("Você atingiu o limite máximo")
	}
}
function decrement() {
	if(count > -10){
		count--;
		CURRENT_NUMBER.innerHTML = count;
	}else{
		alert("Você atingiu o limite máximo")
	}	
}
*/
