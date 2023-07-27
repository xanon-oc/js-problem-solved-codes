// Task 1: Reversing a String without using the built-in reverse() method.
// ........................................................................
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Test the function
const inputString = "hello world";
const reversedString = reverseString(inputString);
console.log(reversedString); // Output: "dlrow olleh"

// Task 2: Sum of Positive Numbers in an Array
// ........................................................................
function sumOfPositiveNumbers(arr) {
  let sum = 0;
  for (let num of arr) {
    if (num > 0) {
      sum += num;
    }
  }
  return sum;
}

// Test the function
const inputArray1 = [2, -5, 10, -3, 7];
const positiveSum = sumOfPositiveNumbers(inputArray1);
console.log(positiveSum); // Output: 19

// Task 3: Finding the Most Frequent Element in an Array
// ........................................................................
function findMostFrequentElement(arr) {
  let frequencyMap = {};
  let maxFrequency = 0;
  let mostFrequentElement;

  for (let num of arr) {
    if (frequencyMap[num]) {
      frequencyMap[num]++;
    } else {
      frequencyMap[num] = 1;
    }

    if (frequencyMap[num] > maxFrequency) {
      maxFrequency = frequencyMap[num];
      mostFrequentElement = num;
    }
  }

  return mostFrequentElement;
}

// Test the function
const inputArray2 = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const mostFrequent = findMostFrequentElement(inputArray2);
console.log(mostFrequent); // Output: 3

// Task 4: Finding two numbers in a sorted array that add up to the target value.
// ........................................................................
function findTwoNumbersWithSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}

// Test the function
const sortedArray = [1, 3, 6, 8, 11, 15];
const targetValue = 9;
const indices = findTwoNumbersWithSum(sortedArray, targetValue);
console.log(indices); // Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)

// Task 5: Simple JavaScript Calculator
// ........................................................................
function calculator(num1, operator, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return NaN; // Invalid operator
  }
}

// Test the function
const num1 = 10;
const operator = "+";
const num2 = 5;
const result = calculator(num1, operator, num2);
console.log(result); // Output: 15

// Task 6: Generating a Random Password of a Specified Length
// ........................................................................
function generateRandomPassword(length) {
  const charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}

// Test the function
const passwordLength = 12;
const randomPassword = generateRandomPassword(passwordLength);
console.log(randomPassword);

// Task 7: Converting Roman Numeral to Integer
// ........................................................................
function romanToInt(roman) {
  const romanNumeralMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  for (let i = 0; i < roman.length; i++) {
    const currentDigit = romanNumeralMap[roman[i]];
    const nextDigit = romanNumeralMap[roman[i + 1]];

    if (nextDigit && currentDigit < nextDigit) {
      result += nextDigit - currentDigit;
      i++; // Skip the next digit since it has been considered
    } else {
      result += currentDigit;
    }
  }

  return result;
}

// Test the function
const romanNumeral = "XXI";
const intValue = romanToInt(romanNumeral);
console.log(intValue); // Output: 21

// Task 8: Finding the Second Smallest Element in an Array
// ........................................................................
function findSecondSmallest(arr) {
  if (arr.length < 2) {
    return NaN; // Not enough elements in the array
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let num of arr) {
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest && num !== smallest) {
      secondSmallest = num;
    }
  }

  return secondSmallest !== Infinity ? secondSmallest : NaN;
}

// Test the function
const numbersArray = [5, 2, 8, 1, 3, 6, 4];
const secondSmallestNumber = findSecondSmallest(numbersArray);
console.log(secondSmallestNumber); // Output: 2
