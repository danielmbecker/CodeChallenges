//2022-06-26
// Upstream/Downstream

// Chingel is practicing for a rowing competition to be held on this saturday. He is trying his best to win this tournament for which he needs to figure out how much time it takes to cover a certain distance.

// Input

// You will be provided with the total distance of the journey, speed of the boat and whether he is going downstream or upstream. The speed of the stream and direction of rowing will be given as a string. Check example test cases!

// Output

// The output returned should be the time taken to cover the distance. If the result has decimal places, round them to 2 fixed positions.





function time(distance,boatSpeed,stream){
    //Split the stream string into two values, the direction and speed
    stream = stream.split(' ')
    //Assign the stream speed to a variable
    let streamSpeed = Number(stream[1])
  
    // Apply the stream's influence on the boatspeed, whether a positive or negative influence
    if(stream[0] =="Upstream"){
      boatSpeed = boatSpeed - streamSpeed
    } else if(stream[0] =="Downstream"){
      boatSpeed = boatSpeed + streamSpeed
    }
  
    //determine the time to complete the distance
    let time =(distance / boatSpeed)
    
    //if the boat's time is whole number, return it, otherwise round to two decimal places
    if(time % 1 === 0){
      return time
    }else if(time % 1 !== 0){
      return Number(time.toFixed(2))
    }
    
  }