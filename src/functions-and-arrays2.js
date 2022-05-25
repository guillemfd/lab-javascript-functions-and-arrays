//1
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



//2 -- Implement the function findLongestWord that takes as an argument an array of words and returns the longest one. If there are 2 with the same length, it should return the first occurrence.

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



//3
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



//BONUS 1
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


