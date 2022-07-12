//2022-07-12

// Find the capitals

// Instructions

// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example

// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

var capitals = function (word) {
    //split the argument string
	let split = word.split('')
    //create an empty array to store the positions of capital letters
    let capitalPositions = []

    //create a loop 
        //if a letter of the string is uppercase, push that letter's index to the capitalPositions array
  for (let i = 0; i<split.length; i++){
      
    if (split[i] === split[i].toUpperCase()){
      capitalPositions.push(i)
    }
  }
  //return the capitalPositions array
  return capitalPositions
};