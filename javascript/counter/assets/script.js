var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;


document.getElementById("increment").addEventListener("click", increment);
document.getElementById("decrement").addEventListener("click", decrement);

function increment(){
	var maxNumber = document.getElementById("maxValue").value;
	if(currentNumber < maxNumber){
		currentNumber += 1;
		if(currentNumber >= 0){
			currentNumberWrapper.classList.remove("redNumb");
		}
		currentNumberWrapper.innerHTML = currentNumber;
	}
}

function decrement(){
	var minNumber = document.getElementById("minValue").value;
	if(currentNumber > minNumber){
		currentNumber -= 1;
		if(currentNumber < 0){
			currentNumberWrapper.classList.add("redNumb");
		}
		currentNumberWrapper.innerHTML = currentNumber;
	}
}