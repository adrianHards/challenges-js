function intToRoman(num) {

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

	let string = ''

    while(num != 0) {
        for(let i of Object.keys(romanNumerals).reverse()){
            if(num >= i) {
                num -= i;
                string += romanNumerals[i];
                break;
            }
        }
    }
   return string;
};
