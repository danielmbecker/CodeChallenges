// Descending Order

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Examples:

// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321


function descendingOrder(n){
    //Create a new variable spliting the number at each digit
    let nToArr = n.toString().split('')
    //Sort the resulting assortment of numbers
    nToArr = nToArr.sort((a,b) => a > b ? -1 : 1)
    //Rejoin the numbers, while ensuring they stay numerical
    return Number(nToArr.join(''))
  }