const removeFromArray = function(arr, ...args) {
    args.forEach( i => {
        if (arr.indexOf(i) != -1){
            arr.splice(arr.indexOf(i), 1)
        }
    });

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
