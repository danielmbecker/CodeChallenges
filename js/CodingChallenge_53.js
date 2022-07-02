//2022-07-02

//Driving Licence

// Introduction

// In the United Kingdom, the driving licence is the official document which authorises its holder to operate various types of motor vehicle on highways and some other roads to which the public have access. In England, Scotland and Wales they are administered by the Driver and Vehicle Licensing Agency (DVLA) and in Northern Ireland by the Driver & Vehicle Agency (DVA). A driving licence is required in the UK by any person driving a vehicle on any highway or other road defined in s.192 Road Traffic Act 1988[1] irrespective of ownership of the land over which the road passes, thus including many which allow the public to pass over private land; similar requirements apply in Northern Ireland under the Road Traffic (Northern Ireland) Order 1981. (Source Wikipedia)
// Driving
// Task

// The UK driving number is made up from the personal details of the driver. The individual letters and digits can be code using the below information
// Rules

// 1–5: The first five characters of the surname (padded with 9s if less than 5 characters)

// 6: The decade digit from the year of birth (e.g. for 1987 it would be 8)

// 7–8: The month of birth (7th character incremented by 5 if driver is female i.e. 51–62 instead of 01–12)

// 9–10: The date within the month of birth

// 11: The year digit from the year of birth (e.g. for 1987 it would be 7)

// 12–13: The first two initials of the first name and middle name, padded with a 9 if no middle name

// 14: Arbitrary digit – usually 9, but decremented to differentiate drivers with the first 13 characters in common. We will always use 9

// 15–16: Two computer check digits. We will always use "AA"
// Your task is to code a UK driving license number using an Array of data. The Array will look like

// data = ["John","James","Smith","01-Jan-2000","M"];
// Where the elements are as follows

// 0 = Forename
// 1 = Middle Name (if any)
// 2 = Surname
// 3 = Date of Birth (In the format Day Month Year, this could include the full Month name or just shorthand ie September or Sep)
// 4 = M-Male or F-Female
// You will need to output the full 16 digit driving license number.

// Good luck and enjoy!



function driver(data) {
    //Isolated birthdate for ease of data extraction
    let birthData = data[3]
  
     //Characters 1-5
    let nameValue = [data[2][0], data[2][1], data[2][2], data[2][3], data[2][4]]
    
    //If name is less than 5 characters, the missing characters ought to be 9's
      for (let i = 0; i < 5; i++){
         if(nameValue[i] === undefined){
          nameValue[i] = 9
         }
        }
    
     //Character 6
    let birthDecadeValue = birthData[birthData.length - 2]
    
     //Characters 7-8
    let birthMonthValue = [birthData[3], birthData[4], birthData[5]]
    let birthMonthDigits = []
    
     //Characters 9-10
    let birthDayValue = [birthData[0], birthData[1]]
    
     //Characters 11
    let birthYearValue = birthData[birthData.length - 1]
    
     //Characters 12-13
    let firstAndMiddleNameInitials = [data[0][0], data[1][0]]
    
     //Characters 14
    let arbitraryDigit = 9
    
     //Characters 15-16
    let computerCheck = 'AA'
    
    //create a 3 letter string from the birth month values
    birthMonthValue = birthMonthValue.join('').toLowerCase()
    
    //convert birth month string into a two digit number 
    if(birthMonthValue === 'jan'){
      birthMonthDigits = [0, 1]
      }else if(birthMonthValue === 'feb'){
      birthMonthDigits = [0, 2]
      }else if(birthMonthValue === 'mar'){
      birthMonthDigits = [0, 3]
      }else if(birthMonthValue === 'apr'){
      birthMonthDigits = [0, 4]
      }else if(birthMonthValue === 'may'){
      birthMonthDigits = [0, 5]
      }else if(birthMonthValue === 'jun'){
      birthMonthDigits = [0, 6]
      }else if(birthMonthValue === 'jul'){
      birthMonthDigits = [0, 7]
      }else if(birthMonthValue === 'aug'){
      birthMonthDigits = [0, 8]
      }else if(birthMonthValue === 'sep'){
      birthMonthDigits = [0, 9]
      }else if(birthMonthValue === 'oct'){
      birthMonthDigits = [1, 0]
      }else if(birthMonthValue === 'nov'){
      birthMonthDigits = [1, 1]
      }else if(birthMonthValue === 'dec'){
      birthMonthDigits = [1, 2]
      }
      
    //apply the birth month change of +5 to first month digit for women 
      if (data[4] === 'F'){
        birthMonthDigits = [(birthMonthDigits[0] + 5), (birthMonthDigits[1])]
      }
    
    //if driver has no middle initial, convert undefined value to 9
    if(firstAndMiddleNameInitials[1] === undefined){
      firstAndMiddleNameInitials[1] = 9
    }
    
    //join all values into one string
    let idValues = [nameValue.join('').toUpperCase(), birthDecadeValue, birthMonthDigits.join(''), birthDayValue.join(''), birthYearValue, firstAndMiddleNameInitials.join(''), arbitraryDigit, computerCheck]
  
    return idValues.join('')
  }