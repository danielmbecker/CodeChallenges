// 2022-06-13 

// Beginner Series #3 Sum of Numbers

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)

// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

function getSum( a,b ){
    let sum = []
    let x
    let y
    
    if(a < b){
      x = a
      y = b
    }else if(a > b){
      x = b
      y = a
    }else{
      return a
    }
    
       for (let i = x; i < y; i++){
         sum.push(i)
       }
      sum.push(y)
      sum = sum.reduce((acc, num) => acc + num, 0)
      console.log(sum)
      return sum
    }