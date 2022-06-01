//Find the unique number

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

// It’s guaranteed that array contains at least 3 numbers.





function findUniq(arr) {
    //Sort the array values in ascending order
      arr = arr.sort((a,b) => a - b)
    //Find the value of the last array element, the index of which will varry depending on the array length
      let lastArrElement = arr.length-1
    //If the first array value is equal to the second array value, return the last array element
      //otherwise, return the first array element.
      return arr[0] === arr[1] ? arr[lastArrElement] : arr[0]
    }
    