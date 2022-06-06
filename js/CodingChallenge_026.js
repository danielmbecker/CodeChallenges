//  2022-06-05


// Moving Zeros To The End


// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


function moveZeros(arr) {
    const theZeros = arr.filter(e => e === 0)
    const allElse = arr.filter(e => e !==0)
    let iterationTimes = theZeros.length
    
    for (let i = 0; i < iterationTimes; i++){
      allElse.push(theZeros[i])
    }
    return(allElse)
  }