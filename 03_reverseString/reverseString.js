const reverseString = function(str) {
    let strArray = Array.from(str);

    strArray = strArray.reverse();

    return strArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
