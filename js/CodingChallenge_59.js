//2022-07-08

// Mumbling

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.


function accum(s) {
    s = s.toLowerCase()
  
    let pushed = []
    pushed.push(s[0])
  
    for( let a = 1; a < s.length+1; a++){
  
      for(let b = 0; b < a; b++){
        pushed.push(s[a-1])
      }
      pushed.push('-')
  }
    pushed.shift()
    pushed.pop()
  
    for(let i = 0; i < pushed.length; i++){
  
      if(pushed[i] === '-'){
        pushed[i+1] = pushed[i+1].toUpperCase()
      }else if(i===0){
        pushed[0] = pushed[0].toUpperCase()
      }
    }
  
    return pushed.join('')
    
    }