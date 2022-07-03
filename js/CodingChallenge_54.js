//2022-07-03

//Maze Runner

// Task

// You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given. If you reach the end point before all your moves have gone, you should return Finish. If you hit any walls or go outside the maze border, you should return Dead. If you find yourself still in the maze after using all the moves, you should return Lost.
// The Maze array will look like

// maze = [[1,1,1,1,1,1,1],
//         [1,0,0,0,0,0,3],
//         [1,0,1,0,1,0,1],
//         [0,0,1,0,0,0,1],
//         [1,0,1,0,1,0,1],
//         [1,0,0,0,0,0,1],
//         [1,2,1,0,1,0,1]]
// ..with the following key

//       0 = Safe place to walk
//       1 = Wall
//       2 = Start Point
//       3 = Finish Point
//   direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"
// Rules

// 1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.

// 2. The start and finish positions will change for the final tests.

// 3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.

// 4. If you reach the end point before all your moves have gone, you should return Finish.

// 5. If you hit any walls or go outside the maze border, you should return Dead.

// 6. If you find yourself still in the maze after using all the moves, you should return Lost.




function mazeRunner(maze, directions) {
    // find start point
    
    console.log(maze)
    //Find start coordinate
    
    let mazeString = maze.join(',')
    let startNum = mazeString.indexOf(2)
    //this method counted the commas, so devide the value by 2
    startNum = (((mazeString.indexOf(2)) / 2))
  
    //make an Y,X coordinate that could be passed as 
      //maze[positionY][positionX] to determine that spot's value
    let positionY = Math.floor(startNum / maze.length)
    let positionX = (startNum-(positionY*maze.length))
    let startPoint = [positionY, positionX]
    
    
     for (let i = 0; i < directions.length; i++){
  
         //navigate using N S E W, 
            // N influences positionY by +1, S by -1 
            // E influences positionX by +1, W by -1 
          if (directions[i] === "N"){
            positionY = positionY - 1
          }else if (directions[i] === "S"){
            positionY = positionY + 1
          }else if (directions[i] === "E"){
            positionX = positionX + 1
          }else if (directions[i] === "W"){
            positionX = positionX - 1
        }
          //If at any point, positionX or positionY are less than 0 or greater than the
             // maze length, we have gone out of bounds, and are Dead
          if ( positionY < 0 || positionX < 0 || positionY >= maze.length || positionX >= maze.length){
            return 'Dead' 
         // if the maze position is 1, we are Dead
          }else if(maze[positionY][positionX] === 1){
            console.log('Dead')
            return 'Dead'
         // if the maze positon is 3, we have Finished
          }else if(maze[positionY][positionX] === 3 ){
            console.log ('Finish')
            return 'Finish'
          }   
    }
      //if all directions have been entered without dying yet, and the position is not yet 3, 
        //we are Lost
      console.log(maze[positionY][positionX])
      if( maze[positionY][positionX] !=3 ){
        return 'Lost'
      }
  }