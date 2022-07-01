// 2022-07-01

// Two to One

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:

// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


function longest(s1, s2) {
    //Combine the two arguments into a single array, then join them into a single value
    let combined = [s1, s2]
    combined = combined.join('')
    //split that value into individual letters and sort the individual letters
    combined = combined.split('')
  
    combined.sort()
  
    //Define the length of the orignal string of letters
    let length = combined.length
    
    //Loop through the list of letters
    //if the first letter equals the following letter, remove the first letter
    //otherwise, if the first letter is not equal to the following letter, push it to the 
        //end of the letter sequence and remove it from the front
    for (let i = 0; i < length; i++){
      if ( combined[0] === combined [1]){
        combined.shift()
        }else if (combined[0] !== combined[1]){
      combined.push(combined[0])
      combined.shift()
    }
}
    //join the final value of the letter list and return
   return combined.join('')
}