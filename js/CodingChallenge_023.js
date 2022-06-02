//  2022-06-22

//  Shortest Word
//  
//  Given a string of words, return the length of the shortest word(s).
//  
//  String will never be empty and you do not need to account for different data types.


function findShort(s){
    //Split the sentance into individual elements for each word
  //  s = s.split(' ')
    //Change the element's values to represent it's character length
  //  s = s.map(e => e.length)
    //Sort the elements by length
  //  s = s.sort((a,b) => a>b ? 1: -1)
    //Return the first element, which is the smallest of the array
  //  return s[0]
    
    //Conscise
    return s.split(' ').map(e => e.length).sort((a,b) => a>b ? 1: -1)[0]
  }