
var	temp2, result;
var numberOfDots = 0;

function setValues() {
	temp = document.getElementById('textBox');
	a = Number(temp.value);
}


function addNumber(x) {
	temp2 = document.getElementById('textBox');
	temp2.value += x;
}

function addSign(y) {
	temp2 = document.getElementById('textBox');
	if (temp2.value.slice(-1) != '+' && 
		temp2.value.slice(-1) != '-' && 
		temp2.value.slice(-1) != '*' && 
		temp2.value.slice(-1) != '/' ) {
		temp2.value += y;
	}
	numberOfDots = 0;
}

function addDecimal() {
	temp2 = document.getElementById('textBox');

	if (numberOfDots == 0) { temp2.value += '.';}
	numberOfDots++;
	
}

function assignment() {
	temp2 = document.getElementById('textBox');
	result = eval(temp2.value);
	result = result.toFixed(10);
	temp2.value = temp2.value.toString()
	temp2.value = result;
}

function clearLastEntry() {
	temp2 = document.getElementById('textBox');
	if (temp2.value.slice(-1) == '.') {numberOfDots =0}
	temp2.value = temp2.value.substring(0, temp2.value.length - 1);
}

function clearAll() {
	temp2 = document.getElementById('textBox');
	temp2.value = '';
	numberOfDots = 0;
}


