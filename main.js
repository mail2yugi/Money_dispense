
function amountBlur(event){
	var amount = +event.target.value;
	if(typeof amount === "number") {
	var amtArray = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
	var resultArray = [];
	for (let i = 0; i < amtArray.length; i++) {
		resultArray.push(Math.floor(amount / amtArray[i]));
		amount = amount % amtArray[i];
	}
	document.getElementById('1').innerHTML = resultArray[9];
	document.getElementById('2').innerHTML = resultArray[8];
	document.getElementById('5').innerHTML = resultArray[7];
	document.getElementById('10').innerHTML = resultArray[6];
	document.getElementById('20').innerHTML = resultArray[5];
	document.getElementById('50').innerHTML = resultArray[4];
	document.getElementById('100').innerHTML = resultArray[3];
	document.getElementById('200').innerHTML = resultArray[2];
	document.getElementById('500').innerHTML = resultArray[1];  	
	document.getElementById('2000').innerHTML = resultArray[0];
	document.getElementById('total').innerHTML	=  resultArray[9] + resultArray[8] + resultArray[7] + resultArray[6] + resultArray[5] + resultArray[4] + resultArray[3] + resultArray[2] + resultArray[1] + resultArray[0];
	}
}