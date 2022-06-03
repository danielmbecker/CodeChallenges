function stray(numbers) {

    //   This method timed out due to sample test data sizes
    //
    //   numbers = numbers.sort((a,b ) => a > b? 1 : -1)
    //   let lastNumber = numbers.length - 1
    //   return numbers[0] === numbers[1] ? numbers[lastNumber] : numbers [0]
      
    //   This method succeeded within the availible timeframe.

    // Conditional statement, if the first two numbers are equal,
      if(numbers[0] === numbers[1]){
          //filter out the number that is not equal to the first number
      let filteredNumbers = numbers.filter(e => e !== numbers[0])
      return (filteredNumbers[0])
      }else{
          //otherwise, return the first number
      return (numbers[0])
    }
      }