// 2022-06-09 

// Human Readable Time

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.


function humanReadable (seconds) {

    let hours = Math.floor(seconds/60/60)
        hours = hours.toString().padStart(2, '0')
    
    let minutes = Math.floor(seconds/60 - hours*60)
        minutes = minutes.toString().padStart(2, '0')
    
    let remainingSeconds = Math.floor(seconds - hours*60*60 - minutes*60)
        remainingSeconds = remainingSeconds.toString().padStart(2, '0')
    
    return `${hours}:${minutes}:${remainingSeconds}`
  }
  
  
  