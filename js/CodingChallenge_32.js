// 2022-06-11 
// Sort the odd

// Task

// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples

// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
    let sortedOdds = array.filter(e => e % 2 !== 0).sort((a,b) => a - b)
  
    for (let i = 0; i < array.length; i++){
      if (array[i] % 2 !== 0){
        array.splice(i, 1, sortedOdds[0])
        sortedOdds.shift()  
      }
    } 
    return array
  }