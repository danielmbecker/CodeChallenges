// 2022-07-05

// Convert Improper Fraction to Mixed Number

// Convert Improper Fraction to Mixed Number

// You will need to convert an improper fraction to a mixed number. For example:

// getMixedNum('18/11'); // Should return '1 7/11'
// getMixedNum('13/5'); // Should return '2 3/5'
// getMixedNum('75/10'); // Should return '7 5/10'
// NOTE: All fractions will be greater than 0.

function getMixedNum(fraction) {
    fraction = fraction.split('/')
    
    let wholeNumber = Math.floor(fraction[0]/fraction[1])
    
    let remainderNumerator = (fraction[0] - wholeNumber*fraction[1])
  
    return`${wholeNumber} ${remainderNumerator}/${fraction[1]}`
    
  }