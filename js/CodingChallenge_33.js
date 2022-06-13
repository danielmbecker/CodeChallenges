// 2022-06-12
// Replace With Alphabet Position
// 
// Given a string, replace every letter with its position in the alphabet.
// 
// If anything in the text isn't a letter, ignore it and don't return it.
// 
// "a" = 1, "b" = 2, etc.
// 
// Example
// 
// alphabetPosition("The sunset sets at twelve o' clock."
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" 
//      ( as a string )


function alphabetPosition(text) {

    text = text.toLowerCase()
    text = text.split('')
    
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  
    let indexFinder
    let textNumbers = []
    
    for (let i = 0; i < text.length; i++){
      let currentValue = text[i]
      indexFinder = alphabet.findIndex(e => e === currentValue) + 1
         if(indexFinder>0){
           textNumbers.push(indexFinder) 
            }
    }
    
  textNumbers = textNumbers.join(' ')
  return textNumbers
    
  }