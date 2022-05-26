//1   -----------------------------------------------------------------------------------------------------
function maxOfTwoNumbers(a, b) {
    if (a > b) {
        console.log(`${a}`)
    } else if (a < b) {
        console.log(`${b}`)
    } else {
        console.log('Both numbers are iqual!')
    }
}

maxOfTwoNumbers(8, 2)



//2   ----------------------------------------------------------------------------------------------------- 
//-- Implement the function findLongestWord that takes as an argument an array of words and returns the longest one. If there are 2 with the same length, it should return the first occurrence.

const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];


function findLongestWord(words) {
    if (!words.length) {
      return null
    }
    let longestWord = '';
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
    return longestWord;
  }
  console.log(findLongestWord(words));


//2 v2 ----------------------------------------------
function findLongestWord2(arr) {
    if (arr.length === 0) {
        return null
    }

    let word = "";
    for (let i = 0; i < arr.length; i++) {
        if (word.length < arr[i].length) {
            word = arr[i];
        }
    }
    return word;
}
console.log(findLongestWord2(words))



//2 v3 ----------------------------------------------
function findLongestWord3(words) {
    let longestWord = "";
    if (words.length === 0)
    return null
  
      for (let i = 0; i < words.length; i++) {
        if (longestWord.length < words[i].length) {
          longestWord = words[i]
        }
      }
      return longestWord
  }
  console.log(findLongestWord3(words))



//3   -----------------------------------------------------------------------------------------------------
//Implement the function named sumNumbers that takes an array of numbers as an argument, and returns the sum of all of the numbers in the array. Later in the course we will learn how to do this by using the reduce array method, which will make your work significantly easier. For now, let's practice "declarative" way adding values, using loops.

const numbersArray = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

let total = 0


function sumNumbers(arr) {
    let total = 0;
    for (let i = 0; i < arr.length;  i++){
      total += arr[i];
    }
    return total;
  }

  console.log(sumNumbers(numbersArray))



//BONUS 3.1   -----------------------------------------------------------------------------------------------------
//Let's implement the function sum() that calculates the sum for array filled with (almost) any type of data. Note that strings should have their length added to the total, and boolean values should be coerced into their corresponding numeric values. Check the tests for more details.

const mixedArr = [6, 12, 'miami', 1, false, true, 'barca', '200', 'lisboa', 8, 10];
// should return: 57


function sum(arr) {
  let newTotal = 0

  for (let i = 0; i < arr.length;  i++){
    if (typeof arr[i] === 'number') {
      newTotal += arr[i]; 
    } else if (typeof arr[i] === 'string') {
      newTotal += arr[i].length
    } else if (typeof arr[i] === 'boolean') {
      if (arr[i] === true) {
        newTotal += 1
      } else {
        newTotal += 0
      }
    // } else if (typeof arr[i] === 'object') {
    //   throw new Error("Unsupported data type")
    }
  }
  return newTotal
}
console.log(sum(mixedArr))



//4   -----------------------------------------------------------------------------------------------------
//4.1Implement the function averageNumbers that expects an array of numbers and returns the average of the numbers

const numbers = [2, 6, 9, 10, 7, 4, 1, 9]

function averageNumbers(arr) {
  let average = 0
  for (let i = 0; i < arr.length; i++) {
    average += arr[i] / arr.length
  }
  return average
}

console.log(averageNumbers(numbers))


//Implement the function named averageWordLength that receives as a single argument an array of words and returns the average length of the words
const newWords = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(arr) {
  let wordsAverage = 0
  for (let i = 0; i < arr.length; i++) {
    wordsAverage += arr[i].length / arr.length
  }
  return wordsAverage
}

console.log(averageWordLength(newWords))




//Bonus 4   -----------------------------------------------------------------------------------------------------
//Create function avg(arr) that receives any mixed array and calculates average. Consider as mixed array an array filled with numbers and/or strings and/or booleans.
//const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function avg(arr) {
  let mixedAvg = 0

  for (let i = 0; i < arr.length;  i++){
    if (typeof arr[i] === 'number') {
      mixedAvg += arr[i]; 
    } else if (typeof arr[i] === 'string') {
      mixedAvg += arr[i].length
    } else if (typeof arr[i] === 'boolean') {
      if (arr[i] === true) {
        mixedAvg += 1
      } else {
        mixedAvg += 0
      }
    }
  }
  let mixedAvgReal = mixedAvg / arr.length
  return mixedAvgReal
}
console.log(avg(mixedArr))




//5   -----------------------------------------------------------------------------------------------------
//Take the following array, remove the duplicates, and return a new array. You are more than likely going to want to check out the indexOf Array method.
//Do this in the form of a function uniquifyArray that receives an array of words as a argument.

const words3 = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

console.log(words3)


// //V1
// function uniquifyArray(arr) {
//     if (!arr.length) {
//       return null
//     }
//     let refinedArr = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (refinedArr.indexOf(arr[i]) === -1) {
//         refinedArr.push(arr[i])
//       }
//     }
//     return refinedArr;
//   }

// //V2
function uniquifyArray(arr) {

  if (!arr.length) {
    return null;
  }

  let refinedArr = []

  for ( let i = 0; i < arr.length; i++ ) {
    let eachItem = arr.indexOf(arr[i])
    if ( eachItem === i ) {
      refinedArr.push(arr[i])
    }
  }
  return refinedArr
}

  console.log('Mi nuevo array sin duplicados es: ')
  console.log(uniquifyArray(words3));





//6   -----------------------------------------------------------------------------------------------------
//Let's create a simple array search.
//Declare a function named doesWordExist that will take in an array of words as one argument, and a word to search for as the other. Return true if it exists, otherwise, return false. Don't use indexOf for this one.

