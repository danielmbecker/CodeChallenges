//2022-06-17

//Calculate average

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
    if(array.length === 0){
          return 0
    }else{
      let sum = array.reduce((acc, num) => acc + num, 0)
      return sum / array.length
  }
  }