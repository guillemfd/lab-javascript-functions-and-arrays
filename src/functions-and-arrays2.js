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

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

let total = 0


function sumNumbers(arr) {
    let total = 0;
    for (let i = 0; i < arr.length;  i++){
      total += arr[i];
    }
    return total;
  }

  console.log(sumNumbers(numbers))