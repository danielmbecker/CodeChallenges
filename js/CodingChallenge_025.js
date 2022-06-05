//  2022-06-04

// Simple Pig Latin

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !



function pigIt(str){
  str = str.split(' ')
  let pigLatinTranslator = function() {
    str = str.map(e => e.split(''))
    for (let i = 0; i < str.length; i++){
      str[i].push(str[i][0])
      str[i].shift(str[i][0])
      str[i].push('ay')
      str[i] = str[i].join('')
     }
      str = str.join(' ')  
  }

    if (str[str.length-1] === '?' || str[str.length-1] === '!'){
    let punctuation = str.pop(str.length-1) 
      pigLatinTranslator()
      str = str.concat(" ", punctuation)
      return str
    }else{ 
      pigLatinTranslator()
      return str
  }
    }