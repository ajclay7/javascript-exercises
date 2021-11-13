const ftoc = function(temp) {
 // (32°F − 32) × 5/9 = 0°C
 let result = (temp - 32) * (5 / 9);

 if (result % 1 !== 0) {
  return Math.round(result * 10) / 10;
 } else {
   return result;
 }

};

const ctof = function(temp) {
  // (0°C × 9/5) + 32 = 32°F
  let result = (temp * (9 / 5) ) + 32;

  if (result % 1 !== 0){
    return Math.round(result * 10) / 10;
  } else {
    return result;
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
