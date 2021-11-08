const sumAll = function(x, y) {
    
    // Check to make sure inputs are valid numbers
    if( typeof x !== 'number' || typeof y !== 'number' || x < 0 || y < 0 ) {
        return "ERROR";
    }

    if ( y < x ) {
        a = y;
        b = x;
    } else {
        a = x;
        b = y
    }

    let sum = a;

    for (let i = a; i < b; i++) {
        sum += (i + 1) ;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
