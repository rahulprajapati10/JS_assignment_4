
// Q3. Count the Vowels

// You are given a string S containing both uppercase and lowercase letters. You need to find out the number of vowels in the
// given string.
// Note: You have to complete Count_Vowel function. No need to take any input.
// Input Format
// The first and only line of the input contains string S.
// Output Format
// Return the number of Vowels in the string S as output.
// Constraints
// 1≤|S|≤100, where |S| denotes the length of string S.

// Example
// Sample Input
// Prepbytes
// Sample Output
// 2


let str = " I am learNing the javaScript from the Cetpa infotech  a A "

let vowelcount = 0;



for (let i = 0; i < str.length; i++) {
    let letter = str[i].toLowerCase();

    if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'
        || letter == 'A' || letter == 'E' || letter == 'I' || letter == 'O' || letter == 'U'
    ) {

        vowelcount++;
    }
}

console.log("vowel_count : =", vowelcount)







