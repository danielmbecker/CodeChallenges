// 2022-06-25

// Counting Duplicates

// Count the number of Duplicates

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice



function duplicateCount(text){
    //take the string argument, remove any case sensitivity, separate all letters, and
    // sort them alphabetically
       text = text.toLowerCase().split('').sort()
    //create a new array to store the duplicates
      let duplicateArray = []
      let length = text.length
      
    // loop through the array a number of times equal to the array length,
    // if the first and second character are the same, push the first character
    // to the duplicates list.
    // On each loop iteration, move the first character to the end of the array, and remove it from
    // the front
      for (let i = 0; i < length; i++){
        if (text[0] === text[1]){
          duplicateArray.push(text[0])
        }
        text.push(text[0])
        text.shift()
      }
    
      
      // Use the same looping technique on the array of duplicates to see if the first character is 
      // the same as the second. If it is, remove it from the array.
      // This yeilds an array with only one character of each duplicate
    
      let numberOfDuplicates = duplicateArray.length+1
      
      for (let i = 0; i < numberOfDuplicates; i++){
        if (duplicateArray[0] === duplicateArray[1]){
          duplicateArray.shift(duplicateArray[0])
        }
        duplicateArray.push(duplicateArray[0])
        duplicateArray.shift()
      }
      
      //return the duplicate array length. It represents the number of letters that were duplicated
      // in the original array
      
      return duplicateArray.length
    }
    
    