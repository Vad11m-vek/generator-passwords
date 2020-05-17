'use strict'
// listener start
start.addEventListener('click', event => {
	let length = long.value;
	out.value = makeid(length);
});
out.addEventListener('click', event => {
	out.setSelectionRange(0, out.value.length)
});
copy.addEventListener('click', event => {
	document.getElementById("out").select();
	document.execCommand("copy");
});
//variables our symbols
let is_digit = '0123456789',
	is_special = "!@#$%^&*()~_='\/|:;",
	is_ua = 'АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ',
	is_en = 'ABCDEFGHIJLMNOPQRSTUVWXYZ',
	$checkBoxs = document.querySelectorAll('input[type=checkbox]'),
	characters = '';
function makeid(length) {
	let result = ''
	let charactersLength = checkCheckingBox().length;
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}
function checkCheckingBox() {
	characters = '';
	if ($checkBoxs[0].checked) characters += is_digit;
	if ($checkBoxs[1].checked) characters += is_special;
	if ($checkBoxs[2].checked) characters += is_ua;
	if ($checkBoxs[3].checked) characters += is_en;
	if ($checkBoxs[4].checked && $checkBoxs[5].checked) {
		characters += characters.toLowerCase();	//upper and low 
	} else if ($checkBoxs[5].checked) characters = characters.toLowerCase(); //lower
	return characters;
}