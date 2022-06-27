// 2022-06-27

// Stop gninnipS My sdroW!

// Write a function that takes in a string of one or more words, 
// and returns the same string, but with all five or more letter 
// words reversed (Just like the name of this Kata). Strings passed 
// in will consist of only letters and spaces. Spaces will be included 
// only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => 
// returns "Hey wollef sroirraw" spinWords( "This is a test") => 
// returns "This is a test" spinWords( "This is another test" )=> 
// returns "This is rehtona test"


function spinWords(string){
    //Split the string into an array of words
    string = string.split(' ')
    
    //Loop through each word. If the word is 5 characters or longer, reverse the letters in 
    // that word.
    for (let i = 0; i < string.length; i++){
  
      if(string[i].length >= 5){
        string[i] = string[i].split('').reverse().join('')
        }
    }
    //Return the array joined as a string
    return string.join(' ')
  }