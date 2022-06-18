//2022-06-18 

// Which triangle is that?

// Build a function that will take the length of each side of a triangle and return if it's either an Equilateral, an Isosceles, a Scalene or an invalid triangle.

// It has to return a string with the type of triangle.
// For example:

// typeOfTriangle(2,2,1) --> "Isosceles"

var typeOfTriangle = function (a, b, c) {
    if (a+b > c && a+c > b && b+c > a ){
        if( a === b && b === c){
          return "Equilateral"
        }else if( a === b || b === c || a === c){
          return "Isosceles"
        }else{
          return "Scalene"
        }
    }else{
      return "Not a valid triangle"
    }
      }