
// Q13. Count the Vowels and Consonants

// You are given a string S containing both uppercase and lowercase letters. You need to find out the number of vowels and the number of
// consonants in the given string.
// Note: You have to complete Count_Vowels function and Count_Consonants function. No need to take any input.
// Input Format
// The first and only line of the input contains string S.
// Output Format
// Return the number of Vowels and the number of Consonants in the string S in the functions.
// Constraints
// 1≤|S|≤100, where |S|denotes the length of string S.
// Example
// Sample Input
// Prepbytes
// Sample Output
// 2 7


let str = "Prepbytes "

str = str.toLowerCase();


let vowelsCount = 0;
let consonantsCount = 0;

for (let i = 0; i < str.length; i++) {
    let char = str[i];


    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        vowelsCount++;
    }

    else if (char >= 'a' && char <= 'z') {
        consonantsCount++;
    }
}


console.log("vowels:", vowelsCount, "consonant:", consonantsCount);
