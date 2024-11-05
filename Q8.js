
// Q8. Plaindrome Check


// You are given a string S, Your task is to check wether the given string is a Palindrome or not.
// A Palindrome is a string, which turnout same when read in reverse direction. Example: "naman" is a Palindrome. String can contain
// both upppercase lowercase letters.
// Note: You have to complete Plain_Check function. No need to take any input.
// Input Format
// The first and the only line of the input contains a string S.
// Output Format
// Return "True" if the given string is Palindrome else return "False" (without " ") .
// Constraints
// 1≤|S|≤100, where |S| denotes the length of string S. S contains both lowercase and uppercase alphabets.
// Example
// Sample Input 1
// Naman
// Sample Output 1
// False
// Sample Input 2
// naman
// Sample Output 2
// True


let str = "naman"

let length = str.length;

for (let i = 0; i < length / 2; i++) {
    if (str[i] !== str[length - 1 - i]) {
        console.log("not a palindrome");
    }
}

console.log("it is a palindrome ");






