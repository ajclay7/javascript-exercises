const palindromes = function (word) {
	word = word.toLowerCase();

	word = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s?]/g, '');
	console.log(word);

	if (word === word.split('').reverse().join('')) {
		return true;
	} else {
		return false;
	}
};

palindromes('hello, how, are, you?');

// Do not edit below this line
module.exports = palindromes;
