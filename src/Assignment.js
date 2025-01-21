// Assignment-4
let description = "Radial code in hisar"
let DescriptionHyphen = description.replace(/ /g, "_");
console.log("text with hyphen=", DescriptionHyphen);

// Assignment-3
let age = [22, 42, 45, 12, 13, 67, 70, 80, 30, 9, 23];
const result = age.filter((age) => age > 25);
console.log("number greater than 25=", result)
let count = result.length;
console.log("count of the number greater than 25=", count)
let greaterNumber = Math.max(...age)
console.log("greatestNumber=", greaterNumber)
let smallestNumber = Math.min(...age)
console.log("smallestNumber=", smallestNumber)
const divide = age.filter((age) => age % 5 === 0)
console.log("number divide by 5=", divide)

// Assignment-5
let startTable = 5
let endTable = 10
function multiplyTable(start, end) {
    for (let i = start; i <= end; i++) {
        console.log("Multiplication Table for", `${i}`);
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} * ${j} = ${i * j}`);
        }
    }
}
multiplyTable(startTable, endTable);

// Assignment 1
let StartValue = "A"
let EndValue = "Z"
let alphabets = ""
for (let i = StartValue.charCodeAt(0); i <= EndValue.charCodeAt(0); i++) {
    console.log(String.fromCharCode(i));
}
for (let i = EndValue.charCodeAt(0); i >= StartValue.charCodeAt(0); i--) {
    console.log(String.fromCharCode(i));
}

let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let print = "";
for (let i = 0; i < alphabet.length; i++) {
    print += alphabet[i];
}
console.log(print)
let reversed = "";
for (let i = alphabet.length - 1; i >= 0; i--) {
    reversed += alphabet[i];
}
console.log(reversed)

// Assingment-2
let countVowelsConsonant = ["a", "b", "c", "d", "e", "i", "o", "u", "r"];
function countVowelsAndConsonants(arr) {
    let vowelCount = 0;
    let consonantCount = 0;

    for (let i = 0; i < arr.length; i++) {
        let char = arr[i];
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            vowelCount++;
        } else {
            consonantCount++;
        }
    }

    return { vowelCount, consonantCount };
}

let counts = countVowelsAndConsonants(countVowelsConsonant);
console.log(`Vowels: ${counts.vowelCount}, Consonants: ${counts.consonantCount}`);








// let countVowelsConsonant = ["a", "b", "c", "d", "e", "i", "o", "u", "r"];
// TODO's
// // 1. Write a program to count the number of vowels and consonants in the given array:
// // 2. Check if a given character (e.g., "z") is a vowel or a consonant.

// Function to count the number of vowels and consonants in the given array

// Function to check if a given character is a vowel or a consonant
function checkCharacter(char) {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        return `${char} is a vowel.`;
    } else {
        return `${char} is a consonant.`;
    }
}

// Example usage:
// let counts = countVowelsAndConsonants(countVowelsConsonant);
// console.log(`Vowels: ${counts.vowelCount}, Consonants: ${counts.consonantCount}`);

let charToCheck = 'z';
console.log(checkCharacter(charToCheck));