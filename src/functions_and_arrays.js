//1   -----------------------------------------------------------------------------------------------------
//v1
console.log('Ex1 - V1')
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



//v2
console.log('Ex1 <---------------------------------------------------------- V2')

function majorNumber (a, b) {
  if (a > b) {
    console.log(a)
  } else if (a < b) {
    console.log(b)    
  } else {
    console.log('Both are the same number!')
  }
}
console.log(majorNumber(5, 5))






//2   ----------------------------------------------------------------------------------------------------- 
//-- Implement the function findLongestWord that takes as an argument an array of words and returns the longest one. If there are 2 with the same length, it should return the first occurrence.

//v2
console.log('Ex2 <---------------------------------------------------------- V1')
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
//v2
console.log('Ex2 <---------------------------------------------------------- V2')

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
//v2
console.log('Ex2 <---------------------------------------------------------- V3')
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




//v2
console.log('Ex2 <---------------------------------------------------------- V4')

function findLongest (arr) {
  let longest = ''                             //declarem una nova variable 'longest' on escriure el resultat de la f
  for (let i=0; i<arr.length; i++) {           //li diem que executi el loop a partir de l'index 0, mentres es trobi dins de la llargada de l'array
    if (longest.length < arr[i].length) {      //'longest' va canviant, en cada moment és cadascun dels items de l'array. Mentre la llargada de 'longest' sigui < que la llargada del següent item aquest canviarà pel nou. En el moment en que el item que hi hagi a 'longest' sigui >= al nou, el loop s'aturarà.
      longest = arr[i]                         //aquí li diem que 'longest' = a l'element que toqui en cada moment de l'array, fins que el loop s'aturi.
    }
  }
  return longest
}

console.log(findLongest(words))




console.log('Ex2 <---------------------------------------------------------- V5')

function paraulaLlarga (arr) {
  let laLlarga = ''
  if (!arr.length) {
    console.log(`Auontestà l'array?`)
  } else {
    for (let i=0; i<arr.length; i++) {
      if (laLlarga.length < arr[i].length) {
        laLlarga = arr[i]
      }
    }
  }
  return laLlarga
}
 console.log(paraulaLlarga(words))



 console.log('Ex2 <------------------------------------------------- .sort --------- V6')
 function getShortestWord(wordsArray) {
	return wordsArray.sort((a, b) => a.length - b.length)[0];
}
console.log('The shortest word is: ')
console.log(getShortestWord(words))



function getLongestWord(arr) {
	return arr.sort((a, b) => b.length - a.length)[0];
}
console.log('The longest word is: ')
console.log(getLongestWord(words))


console.log('Ex2 <------------------------------------------------- .sort --------- V7')
function laMes (arr) {
  if (!arr.length) {
    console.log('Xato, aquest array està buit')
  } else {
    let paraula = ''
    for (let i=0; i<arr.length; i++) {
      if (paraula.length < arr[i].length) {
        paraula = arr[i]
      }
    }
    return paraula
  }
}
console.log(laMes(words))


//3   -----------------------------------------------------------------------------------------------------
//Implement the function named sumNumbers that takes an array of numbers as an argument, and returns the sum of all of the numbers in the array. Later in the course we will learn how to do this by using the reduce array method, which will make your work significantly easier. For now, let's practice "declarative" way adding values, using loops.
//v2
console.log('Ex3 <---------------------------------------------------------- V1')
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



console.log('Ex3 <---------------------------------------------------------- V2')
function sumaTels (arr) {
  let elTotal = 0
  for (i=0; i<arr.length; i++) {
    elTotal += arr[i]
  }
  return elTotal
}
console.log(sumaTels(numbersArray))



console.log('Ex3.1 <---------------------------------------------------------- V3')

function sumaArray (arr) {
  if (!arr.length) {
    console.log('Aquest array està vuit, tros de nyu')
  }
    let sumatori = 0
    for (let i=0; i<arr.length; i++) {
      sumatori += arr[i]
    }
    return sumatori
}
console.log(sumaArray(numbersArray))




console.log('Hey, extra BONUS 4 me <--------------------------- ITERATIVELY ------------------------------- Hey, extra BONUS 4 me')
//Dónam la suma del número que proposi amb els seus anteriors fins arribar a 0 (De manera ITERATIVA)
function sumaAnteriors (num) {
  if (!num) {
    console.log('Dude, give me a valid number!')
  } else {
    let totalNums= 0
    for (let i=0; i<=num; i++) {
      totalNums += i
    }
    return totalNums
  }
}
console.log(sumaAnteriors(10))


//Dónam la multiplicació del número que proposi amb els seus anteriors fins arribar a 0
function factorial(n) {
  var resultat = 1
  for (var i=1; i<=n; i++) {
    resultat *= i
  }
  return resultat
}
console.log(factorial(10))



console.log('Hey, extra BONUS 4 me <--------------------------- RECURSIVELY ------------------------------- Hey, extra BONUS 4 me')
//Mateixos exercisis anteriors però de manera RECURSIVA
function sumaRecursively (n) {
  if (n == 0)
    return 0
  return n + sumaRecursively(n -1)
}
console.log(sumaRecursively(10))


function factorialRecursively (n) {
  if (n == 0)
    return 1
  return n * factorialRecursively(n -1)
}
console.log(factorialRecursively(10))



//BONUS 3.1   -----------------------------------------------------------------------------------------------------
//Let's implement the function sum() that calculates the sum for array filled with (almost) any type of data. Note that strings should have their length added to the total, and boolean values should be coerced into their corresponding numeric values. Check the tests for more details.
console.log('Ex3.1 BONUS <---------------------------------------------------------- V1')

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


console.log('Ex3.1 BONUS <---------------------------------------------------------- V2')

function sumMixed (arr) {
  if (!arr.length) {
    console.log('There is nothing here')
  }
  let mixedTotal = 0
 for (let i=0; i<arr.length; i++) {
    if (typeof arr[i] === 'number') {
      mixedTotal += arr[i]
    } else if (typeof arr[i] === 'string') {
      mixedTotal += arr[i].length
    } else if ( typeof arr[i] === 'boolean') {
        if (arr[i] == true) {
          mixedTotal += +1
        } else if (arr[i] == false) {
          mixedTotal
        }
    } else {
      mixedTotal
    }
  }
  return mixedTotal
}
console.log(sumMixed(mixedArr))



















//4   -----------------------------------------------------------------------------------------------------
//4.1Implement the function averageNumbers that expects an array of numbers and returns the average of the numbers
console.log('Ex4.1 <---------------------------------------------------------- V1')

const numbers = [2, 6, 9, 10, 7, 4, 1, 9, 235, 59, 0]

function averageNumbers(arr) {
  let average = 0
  for (let i = 0; i < arr.length; i++) {
    average += arr[i] / arr.length
  }
  return average
}

console.log(averageNumbers(numbers))

console.log('Ex4.1 <---------------------------------------------------------- V2')

function mitjana (arr) {
  if (!arr.length) {
    console.log('Imbècil, això està buit')
  }
  let suma = 0
  let mitjanaFinal = 0
  for (let i=0; i<arr.length; i++) {
    suma += arr[i]
  }
  mitjanaFinal = suma / arr.length
  return mitjanaFinal.toFixed(3) //Per arrodonir número a x decimals
}
console.log(mitjana(numbers))





console.log('Ex4.2 <---------------------------------------------------------- V1')

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


console.log('Ex4.2 <---------------------------------------------------------- V2')

const pullits = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function mitjanaStrings(arr) {
  //   if (arr.lenght === 0) {
  //   console.log('Però què és aquesta merda que em dones?')
  // }

  let sumaTotalStrings = 0
  let mitjanaFinalStrings = 0

  for (let i = 0; i < arr.length; i++) {
    sumaTotalStrings += arr[i].length
  }
  // mitjanaFinalStrings = sumaTotalStrings / arr.lenght  //arr.lenght no funciona i no entenc xq ¿?
  // return arr.lenght
  // return mitjanaFinalStrings.toFixed(3)
  return sumaTotalStrings
}
console.log(mitjanaStrings(pullits))


// function mitjanaStrings (arr) {
//   // if (!arr.lenght) {
//   //   console.log('Però què és aquesta merda que em dones?')
//   // }

//   let sumaTotalStrings = 0
//   // let mitjanaFinalStrings = 0

//   for (let i=0; i<arr.lenght; i++) {
//     sumaTotalStrings += arr[i].length / arr.lenght
//   }
//   // mitjanaFinalStrings = sumaTotalStrings / arr.lenght
//   // return mitjanaFinalStrings.toFixed(3)
//   return sumaTotalStrings
// } 
// console.log(mitjanaStrings(pullits))














//Bonus 4   -----------------------------------------------------------------------------------------------------
//Create function avg(arr) that receives any mixed array and calculates average. Consider as mixed array an array filled with numbers and/or strings and/or booleans.
// const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

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







console.log('Ex4.3 BONUS <---------------------------------------------------------- V2')

function mitjanaMixed(arr) {
  if (!arr.length) {
    console.log('Dame argo, polfavol')
  }

  let mixedSuma = 0

  for (let i=0; i<arr.length; i++) {
    if (typeof arr[i] === 'number') {
      mixedSuma += arr[i]
    } else if (typeof arr[i] === 'string') {
      mixedSuma += arr[i].length
    } else if (typeof arr[i] === 'boolean') {
      if (arr[i] === true) {
        mixedSuma += +1
      } else {
        mixedSuma
      }
    }
  }

  let mitjanaMixedFinal = mixedSuma / (arr.length -1)

  return mitjanaMixedFinal.toFixed(1)
}
console.log(mitjanaMixed(mixedArr))




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


//V1
function uniquifyArray(arr) {
    if (!arr.length) {
      return null
    }
    let refinedArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (refinedArr.indexOf(arr[i]) === -1) { //-1 vol dir que no troba aquest element
        refinedArr.push(arr[i])
      }
    }
    return refinedArr;
  }

  console.log('EEEEI ===> Mi nuevo array sin duplicados es: ')
  console.log(uniquifyArray(words3));

// //V2
// function uniquifyArray(arr) {

//   if (!arr.length) {
//     return null;
//   }

//   let refinedArr = []
//   for ( let i = 0; i < arr.length; i++ ) {
//     let eachItem = arr.indexOf(arr[i])
//     if ( eachItem === i ) {
//       refinedArr.push(arr[i])
//     }
//   }
//   return refinedArr
// }

//   console.log('Mi nuevo array sin duplicados es: ')
//   console.log(uniquifyArray(words3));

//v2
function cleanArray(arr) {
  if (!arr.length) {
    console.log('Dame argo, polfavol')
  }

  let cleanedArray = []
  for (let i=0; i<arr.length; i++) {
    if () {

    } else {
      cleanedArray += arr[i]
    }
  }
  return cleanedArray

}








//6   -----------------------------------------------------------------------------------------------------
//Let's create a simple array search.
//Declare a function named doesWordExist that will take in an array of words as one argument, and a word to search for as the other. Return true if it exists, otherwise, return false. Don't use indexOf for this one.
const words4 = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(arr, search) {
    if (!arr.length) {
        return null
    }
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === search) {
            return true
        } else {
            return false
        }
    }
}
console.log(doesWordExist(words4, 'machine'));




//7   -----------------------------------------------------------------------------------------------------
//Declare a function named howManyTimes that will take in an array of words as the first argument, and a word to search for as the second argument. The function will return the number of times that word appears in the array.
const words5 = [
    'machine',
    'matter',
    'subset',
    'trouble',
    'starting',
    'matter',
    'eating',
    'matter',
    'truth',
    'disobedience',
    'matter'
  ];

//   function howManyTimes(arr, search) {
//       if (!arr.length) {
//           return null
//       }
//       let counter = 0
//       for (let i=0; i<arr.length; i++) {
//           if (arr[i] === search) {
//               counter++
//           }
//           return counter
//       }
//   }

//   console.log('exercise 7')
//   console.log(howManyTimes(words5, 'matter'))


function howManyTimes(arr, search) {
    let counter = 0;
    arr.forEach(function (item) {
    //arr.forEach((item) => {   <====Línia anterior però en arrow F
      if (item === search) {
        counter++;
      }
    });
    return counter;
  }
  console.log('exercise 7')
  console.log(howManyTimes(words5, 'matter'));




//BONUS 8   --------------------------------------------------------------------------
//What is the greatest product of four adjacent numbers? We consider adjacent any four numbers that are next to each other horizontally or vertically.
//For example, if we have a 5x5 Matrix like:
// [ 1,  2, 3, 4, 5]
// [ 1, 20, 3, 4, 5]
// [ 1, 20, 3, 4, 5]
// [ 1, 20, 3, 4, 5]
// [ 1,  4, 3, 4, 5]
//The greatest product will be the 20x20x20x4 = 32000.

//Declare a function named greatestProduct(matrix) to find it in the 20×20 grid below!

const matrix = [
    [08, 02, 22, 97, 38, 15, 00, 40, 00, 75, 04, 05, 07, 78, 52, 12, 50, 77, 91, 08],
    [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 04, 56, 62, 00],
    [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 03, 49, 13, 36, 65],
    [52, 70, 95, 23, 04, 60, 11, 42, 69, 24, 68, 56, 01, 32, 56, 71, 37, 02, 36, 91],
    [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
    [24, 47, 32, 60, 99, 03, 45, 02, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
    [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
    [67, 26, 20, 68, 02, 62, 12, 20, 95, 63, 94, 39, 63, 08, 40, 91, 66, 49, 94, 21],
    [24, 55, 58, 05, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
    [21, 36, 23, 09, 75, 00, 76, 44, 20, 45, 35, 14, 00, 61, 33, 97, 34, 31, 33, 95],
    [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 03, 80, 04, 62, 16, 14, 09, 53, 56, 92],
    [16, 39, 05, 42, 96, 35, 31, 47, 55, 58, 88, 24, 00, 17, 54, 24, 36, 29, 85, 57],
    [86, 56, 00, 48, 35, 71, 89, 07, 05, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
    [19, 80, 81, 68, 05, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 04, 89, 55, 40],
    [04, 52, 08, 83, 97, 35, 99, 16, 07, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
    [88, 36, 68, 87, 57, 62, 20, 72, 03, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
    [04, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 08, 46, 29, 32, 40, 62, 76, 36],
    [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 04, 36, 16],
    [20, 73, 35, 29, 78, 31, 90, 01, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 05, 54],
    [01, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 01, 89, 19, 67, 48]
  ];

// // V1
function greatestProduct(matrix) {
let maxValue = 0;
// iterate over rows
for (let row = 0; row < matrix.length; row++) {
    // iterate over columns
    for (let column = 0; column < matrix[row].length; column++) {
    let rowSum = 1;
    let colSum = 1;
    // add
    for (let position = 0; position < 4; position++) {
        // if column position is smaller than total columns
        if (column + position < matrix[row].length) {
        rowSum *= matrix[row][column + position];
        }
        // if row position is smaller than total rows
        if (row + position < matrix.length) {
        colSum *= matrix[row + position][column];
        }
    }
    if (rowSum > colSum) {
        if (rowSum > maxValue) {
        maxValue = rowSum;
        }
    } else {
        if (colSum > maxValue) {
        maxValue = colSum;
        }
    }
    }
}
return maxValue;
}
console.log(greatestProduct(matrix));


// //v2
// function greatestProduct(matrix) {
//     let greatestResult=0
//     let fourVertical=0
//     let fourHorizontal=0
//     for(let i=0; i<matrix.length; i++){
//       for(let j=0; j<matrix.length; j++){
//         if(matrix[i][j+3]!==undefined){
//           fourVertical=matrix[i][j]*matrix[i][j+1]*matrix[i][j+2]*matrix[i][j+3]
//           if(fourVertical>greatestResult)greatestResult=fourVertical
//         } 
//         if(i<matrix.length-3){
//           fourHorizontal=matrix[i][j]*matrix[i+1][j]*matrix[i+2][j]*matrix[i+3][j]
//           if(fourHorizontal>greatestResult)greatestResult=fourHorizontal
//         }
      
//       }
  
//     }
//     return greatestResult;
//   }

//   console.log(greatestProduct(matrix))