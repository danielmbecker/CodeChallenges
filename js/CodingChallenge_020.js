// Isograms



// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
// Example: (Input --> Output)
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)


function isIsogram(str){
    //Remove Case sensitivity and split the string into individual arrays per each character
    const split = str.toLowerCase().split('')
    //Sort the individual letters alphabetically
    const ascending = split.sort()
    //Create a loop that assesses each letter value compared to the following letter value.
    //If any letter values are the same, the word is not an isogram; return false. 
    for (let i = 0; i < ascending.length; i++) {
    if (ascending[i] === ascending[i+1]){
      return false
    }
    // If no letter values repeat, the word is an isogram ; return true
  }return true
  }
  
  // Concise:
  //
  // str = str.toLowerCase().split('').sort()
  // for (let i = 0; i < str.length; i++) {
  //   if (str[i] === str[i+1]){
  //     return false
  //   }
  // }return true
  
  
  