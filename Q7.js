
// Q7. Join Strings

// You are given two strings S and P, and your task is to concatenate them and return the concatenated string.
// Note: You have to complete joinStrings function. No need to take any input.
// Input Format
// The first and the only line of the input contains two space-separated strings S and P.
// Output Format
// Return the final concatenated string.
// Constraints
// 1≤|S|,|P|≤100, where |S|and |P| denote the length of string S and P, respectively. S and P contain both lowercase and uppercase
// alphabets.
// Example
// Sample Input
// PrepBytes Technologies
// Sample Output
// PrepBytesTechnologies




// let S = "Prepbytes"
// let P = "Technologies"

// let M = S.concat(P)
// console.log(M)
// return M




let S  =" Prepbytes";
let P = "Technologies";

function join_String(S , P){
        let finalstring = S + P;
        console.log(finalstring);
        return finalstring
}


join_String(S , P)
