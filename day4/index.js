// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output: 34223

// function myReverse(num) {
//   return +(num + '').split('').reverse().join('');
// }

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

// function isPalindrome(str) {
//   if (str.length < 2) {
//     return true;
//   }

//   let i = 0;
//   let j = str.length - 1;
//   while (i < j) {
//     if (str[i] !== str[j]) {
//       return false;
//     }
//     i++;
//     j--;
//   }

//   return true;
// }

// 3. Write a JavaScript function that generates all combinations of a string.
// Example string: 'dog'
// Expected Output: d, do, dog, o, og, g

// function findAllSubstring(str) {
//   let res = []
//   for (let left in str) {
//     right = +(left)
//     while (right < str.length) {
//       res.push(str.slice(left, right + 1))
//       right++
//     }
//   }
//   return res
// }

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string: 'webmaster'
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

// function orderInAlpha(str) {
//   return str.split("").sort().join("")
// }

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// Example string: 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox '

// function capitalize(str) {
//   if (!str) {
//     return ""
//   }

//   return str.split(" ").map(substr => {
//     substr = substr.split("")
//     substr.splice(0, 1, substr[0].toUpperCase())
//     return substr.join("")
//   }).join(" ")
// }

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Example string: 'Web Development Tutorial'
// Expected Output: 'Development'

// function findLongestString(str) {
//   if (!str) {
//     return ""
//   }

//   let max = -1
//   let res
//   str.split(" ").forEach(substr => {
//     if (substr.length > max) {
//       max = substr.length
//       res = substr
//     }
//   })
//   return res
// }

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string: 'The quick brown fox'
// Expected Output: 5

// function countVowels(str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u']
//   if (!str) {
//     return 0
//   }

//   let count = 0
//   for (let char of str) {
//     if (vowels.includes(char)) {
//       count++
//     }
//   }
//   return count
// }

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// function isPrime(num) {
//   if (num <= 1) {
//     return false
//   }

//   for (let i = 2; i <= Math.ceil(num/2); i++) {
//     if (num % i === 0) {
//       return false
//     }
//   }
//   return true
// }

// 9. Write a JavaScript function which accepts an argument and returns the type.
// Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

// function type(input) {
//   return typeof input
// }

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.

// function identityMatrix(n) {
//   if (n < 1) {
//     return null
//   }

//   let arr = new Array(n)
//   for (let i = 0; i < n; i++) {
//     arr[i] = new Array(n)
//   }

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (i === j) {
//         arr[i][j] = 1
//       }
//       else {
//         arr[i][j] = 0
//       }
//     }
//   }

//   return arr
// }

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4

// function secondMinAndMax(arr) {
//   maxindex = arr.indexOf(Math.max(...arr))
//   minindex = arr.indexOf(Math.min(...arr))
//   arr.splice(maxindex, 1)
//   arr.splice(minindex, 1)

//   return [Math.min(...arr), Math.max(...arr)]
// }

// 12. Write a JavaScript function which says whether a number is perfect.
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

// function isPerfect(num) {
//   if (num <= 1) {
//     return false
//   }

//   let divisors = [1]
//   for (let i = 2; i <= Math.ceil(num/2); i++) {
//     if (num % i === 0) {
//       divisors.push(i)
//     }
//   }

//   sum = divisors.reduce((acc, ele) => acc + ele)
//   return sum === num
// }

// 13. Write a JavaScript function to compute the factors of a positive integer.

// function factors(num) {
//   if (num < 1) {
//     return null
//   }

//   let divisors = [1]
//   for (let i = 2; i <= Math.ceil(num/2); i++) {
//     if (num % i === 0) {
//       divisors.push(i)
//     }
//   }

//   if (num !== 1) {
//     divisors.push(num)
//   }

//   return divisors
// }

// 14. Write a JavaScript function to convert an amount to coins.
// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output: 25, 10, 10, 1

// function amountToCoins(amount, coins=[25, 10, 5, 2, 1]) {
//   let coinCounts = new Map()
//   let remainder = amount
//   let res = []

//   for (let coinAmount of coins) {
//     coinCounts.set(coinAmount, Math.floor(remainder/Number(coinAmount)))

//     remainder = amount % Number(coinAmount)
//   }

//   for (const [coinAmount, count] of coinCounts.entries()) {
//     for (let i = 0; i < count; i++) {
//       res.push(coinAmount)
//     }
//   }

//   return res
// }

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.

// function power(b, n=1) {
//   if (n === 0) {
//     return 1
//   }

//   let arr = Array(n).fill(b)
//   return arr.reduce((acc, ele) => acc * ele)
// }

// 16. Write a JavaScript function to extract unique characters from a string.
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"

// function extractUnique(str) {
//   let chars = new Set()
//   let res = ""

//   for (let char of str) {
//     if (!chars.has(char)) {
//       chars.add(char)
//       res += char
//     }
//   }

//   return res
// }

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.

// function frequency(str) {
//   let table = new Map()

//   for (let char of str) {
//     if (char.toLowerCase() !== char.toUpperCase()) {
//       char = char.toLowerCase()
//       if (table.has(char)) {
//         table.set(char, table.get(char) + 1)
//       }
//       else {
//         table.set(char, 1)
//       }
//     }
//   }

//   return Object.fromEntries(table)
// }

// 18. Write a function for searching JavaScript arrays with a binary search.
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

// function binarySearch(arr, target) {
//   if (arr.length === 1) {
//     return arr[0] === target
//   }

//   const mid = Math.floor(arr.length/2)
//   if (arr[mid] > target) {
//     return binarySearch(arr.slice(0, mid), target)
//   }
//   else if (arr[mid] < target) {
//     return binarySearch(arr.slice(mid + 1, arr.length), target)
//   }
//   else {
//     return true
//   }
// }

// function sortAndSearch(arr, target) {
//   if (!Array.isArray(arr) || arr.length === 0 || !Number.isFinite(target)) {
//     return null
//   }

//   return binarySearch(arr.sort((a, b) => a - b), target)
// }

// 19. Write a JavaScript function that returns array elements larger than a number.

// function findLarge(arr, target) {
//   return arr.filter(ele => ele > target)
// }

// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
// Sample character list: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

// function generateId(n) {
//   const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("")

//   let res = ""
//   for (let i = 0; i < n; i++) {
//     const index = Math.floor(Math.random() * chars.length)
//     res += chars[index]
//   }

//   return res
// }

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.
// Sample array: [1, 2, 3] and subset length is 2
// Expected output: [[2, 1], [3, 1], [3, 2]]

// function findSubsets(arr, n, res, tmp, count) {
//   if (count === n) {
//     res.push(tmp)
//     console.log(res)
//     // return res
//   }

//   for (const [index, item] of arr.entries()) {
//     tmp.push(item)
//     // console.log(`${item}, ${tmp}`)
//     let newarr = arr.filter(ele => !(ele === item))
//     // console.log(newarr)
//     return findSubsets(newarr, n, res, tmp, count + 1)
//   }

// }
// console.log(findSubsets([1, 2, 3, 4, 5, 6], 5, [], [], 0))

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
// Sample arguments: 'microsoft.com', 'o'
// Expected output: 3

// function countFrequency(str, letter) {
//   let count = 0

//   for (let char of str) {
//     if (char === letter) {
//       count += 1
//     }
//   }

//   return count
// }

// 23. Write a JavaScript function to find the first not repeated character.
// Sample arguments: 'abacddbec'
// Expected output: 'e'

// function firstUniqueLetter(str) {
//   let visited = new Set();

//   for (let left in str) {
//     if (!visited.has(str[left])) {
//       visited.add(str[left]);
//       let flag = true;

//       for (let right = +left + 1; right < str.length; right++) {
//         if (str[right] === str[left]) {
//           flag = false;
//           break;
//         }
//       }

//       if (flag) {
//         return str[left];
//       }
//     }
//   }
// }

// 24. Write a JavaScript function to apply Bubble Sort algorithm.
// Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order".
// Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

// function bubbleSort(arr) {
//   let n = arr.length

//   while (n > 1) {
//     for (let i = 0; i < n; i++) {
//       if (arr[i] < arr[i+1]) {
//         tmp = arr[i]
//         arr[i] = arr[i+1]
//         arr[i+1] = tmp
//       }
//     }
//     n--
//   }

//   return arr
// }

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"

// function findLongestName(arr) {
//   let max = 0
//   let res = ""

//   arr.forEach(ele => {
//     if (ele.length > max) {
//       max = ele.length
//       res = ele
//     }
//   })

//   return res
// }

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters.

// function findLongestSubstring(str) {
//     let res = '';
  
//     for (let left in str) {
//       let right = +left;
  
//       while (right < str.length) {
//         if (str[right] !== str[left]) {
//           substr = str.slice(left, right + 1);
//           console.log(substr);
//           if (substr.length > res.length) {
//             res = substr;
//           }
//           right++;
//         } else {
//           break;
//         }
//       }
//     }
  
//     return res;
//   }
//   console.log(findLongestSubstring('abacddbec'));
  
  // 27. Write a JavaScript function that returns the longest palindrome in a given string.
  // Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
  // In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.
  
  // 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.

//   function calculator(fn) {
//     return function(a, b) {
//         return fn(a, b)
//     }
//   }

//   function add(a, b) {
//     return a + b
//   }

//   console.log(calculator(add)(1, 2))
  
  // 29. Write a JavaScript function to get the function name.
  