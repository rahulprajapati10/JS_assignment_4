
// Q5. Find Length

// You are given a string S, and your task is to return the length of the string S.
// Note: You have to solve it without using length method. You have to complete findLength function. No need to take any input.
// Input Format
// The first and the only line of the input contains a string S.
// Output Format
// Return the length of the string S.
// Constraints
// 1≤|S||≤100, where |S| denotes the length of string S. S contains both lowercase and uppercase alphabets.
// Example
// Sample Input
// CeDqe
// Sample Output
// 5



let string = "may god bless you"

let lengthOfString = 0;

for(let i = 0; i <string.length; i++){
    let letter = string[i].toLowerCase()

    if(letter >= 'a' && letter <= 'z'){
        lengthOfString++;
    }
}

console.log(lengthOfString);



