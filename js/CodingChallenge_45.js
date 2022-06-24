//2022-06-24

// Build Tower

// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]
// Go challenge Build Tower Advanced once you have finished this :)

function towerBuilder(nFloors) { 
    let asteriksNeeded = []
    let floorsNoSpaces = []
         for (let i = 0; i < nFloors; i++){
          asteriksNeeded.push((i+1)+i)
         }
    
  let asterikGenerator = ""
  
        asteriksNeeded.forEach(item => {
          for (let i = 0; i < item; i++){
            asterikGenerator += "*"
          }
          floorsNoSpaces.push(asterikGenerator)
          asterikGenerator = ""
        })
    
    floorsNoSpaces.reverse()
    
    let spacesNeeded = []
    
        for (let i=1; i < floorsNoSpaces.length; i++){
          spacesNeeded.push(( floorsNoSpaces[0].length - floorsNoSpaces[i].length) /2) 
        }
    
    spacesNeeded = spacesNeeded.reverse()
    
    let spaces = ""
    let floorSpace = []
    
        spacesNeeded.forEach(item => {
           for (let i = 0; i < item; i++){
              spaces += " " 
        }
        floorSpace.push(spaces)
        spaces = ""
       })
    
    floorsNoSpaces = floorsNoSpaces.reverse()
  
    let completedFloors = floorsNoSpaces
    
      for (let i = 0; i < completedFloors.length; i++){
        if(floorSpace[i] != undefined){
        completedFloors[i] = `${floorSpace[i]}${completedFloors[i]}${floorSpace[i]}`
        }
      }
  
   return completedFloors
  
  }