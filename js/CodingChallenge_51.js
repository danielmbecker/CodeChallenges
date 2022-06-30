//2022-06-30

// Abbreviate a Two Word Name


// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F




function abbrevName(name){
    //Split the name into two values
    name = name.split(' ')
    //Store first character of both values into a new variable
    let abrv = [name[0][0], name[1][0]]
    //Join those two values with a '.'
    abrv = abrv.join('.')
    //Retrun joined Value capitalized
    return abrv.toUpperCase()
  }