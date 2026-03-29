const requiredValue = document.querySelector('#requiredValue');
const measuredМValue = document.querySelector('#measuredМValue');
const measuredМValueCategoty = document.querySelector('#measuredМValueCategoty');
const result = document.querySelector('#result');
let itemBorder = document.querySelector('.itemBorder');


requiredValue.addEventListener('input', data1);
measuredМValue.addEventListener('input', data2);
measuredМValueCategoty.addEventListener('input', data3);
























let NeobxodimoeZnachenie = 0;
let IzmetZnachenie = 0;
let IzmeCategory = 0;
let Calculate = 0;

function data1() {
	NeobxodimoeZnachenie = +requiredValue.value;
	console.log("раз " + NeobxodimoeZnachenie);
	calc();
};

function data2() {
	IzmetZnachenie = +measuredМValue.value;
	console.log("два " + IzmetZnachenie);
	calc();
};

function data3() {
	IzmeCategory = +measuredМValueCategoty.value;
	console.log("три " + IzmeCategory);
	calc();
};

function calc(){
	if (NeobxodimoeZnachenie === 0 || IzmetZnachenie === 0 || IzmeCategory === 0) {return};
	Calculate = IzmetZnachenie * 100 / IzmeCategory;
	if (Calculate >= NeobxodimoeZnachenie) {
		itemBorder.style.border = "2px solid green";
		result.value = Calculate +"% Хорошо";
	}
	else {
		itemBorder.style.border = "2px solid red";
		result.value = Calculate +"% Плохо";
	}

	console.log("результат: " + Calculate);
}