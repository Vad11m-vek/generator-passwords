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
let vocabularyIsDigit = '0123456789',
	vocabularyIsSpecial = "!@#$%^&*()~_='\/|:;",
	vocabularyIsUa = 'АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ',
	vocabularyIsEn = 'ABCDEFGHIJLMNOPQRSTUVWXYZ',
	vocabularyIsPl = 'AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŹŻ',
	vocabularyIsEl = 'ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψω',
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
	if (is_digit.checked) characters += vocabularyIsDigit;
	if (is_special.checked) characters += vocabularyIsSpecial;
	if (is_ua.checked) characters += vocabularyIsUa;
	if (is_en.checked) characters += vocabularyIsEn;
	if (is_pl.checked) characters += vocabularyIsPl;
	if (is_el.checked) characters += vocabularyIsEl;
	if (is_upper.checked && is_lower.checked) {
		characters += characters.toLowerCase();	//upper and low 
	} else if (is_lower.checked) characters = characters.toLowerCase(); //lower
	return characters;
}