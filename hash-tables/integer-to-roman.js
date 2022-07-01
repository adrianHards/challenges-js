function intToRoman(num) {
    // create hash table with all possible variants
    const romanNumerals = {
        1000:'M',
        900:'CM',
        500:'D',
        400:'CD',
        100:'C',
        90:'XC',
        50:'L',
        40:'XL',
        10:'X',
        9:'IX',
        5:'V',
        4:'IV',
        1:'I',
    }
  // create an empty string in which we'll add our roman numerals and return later
  let answerString = ''

    // loop over num while condition is true
    while(num != 0) {
        // for...of statements create loops iterating over iterable objects, in this case the keys of our object romanNumerals
        // Object.keys returns an array of the objects enumerable property names i.e. [1, 4, ...] which we reverse [1000, 900 ...]
        // we reverse the array because we start with the largest roman numerals if appropriate
        for(let i of Object.keys(romanNumerals).reverse()){
            // if the num is equal to or greater than the key
            if(num >= i) {
                // minus the key away from the num
                num -= i;
                // and add the value of the key to our answerString
                answerString += romanNumerals[i];
                // break out of the for loop and return to the while loop
                break;
            }
        }
    }
   return answerString;
};

// lets assume num = 1051
// line 28: 1051 > 1000
// line 30: 1051 becomes 51
// line 32: M gets added to answerString
// line 34: go back to while
// line 22: num still does not = 0
// line 28: num is not greater or equal to 1000, 900 etc. so for loop continues until ...
// line 28: 51 is > 50
// line 30: 51 becomes 1
// line 32: L gets added to answerString, we now have ML
// process repeats for a final answer of MLI
// line 22: num is now 0
// line 38: return answerString
