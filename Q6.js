
// Q6. Find the Winner

// You are given a string S consisting of two letters A and D,where each character represent the winner of N games played between Aditya
// and Danish, where letter A represents the win of Aditya and letter D represents the win of Danish. You need to find out the that which
// player wins the maximum number of games or there is a draw between them.
// Note: You have to complete Game_Winner function. No need to take any input.
// Input Format
// The first and only line of the input contains string S.
// Output Format
// Return the name of the player who have won the maximum number of games, if both player won same number of games return Draw.
// Constraints
// 1≤|S|≤100, where |S| denotes the length of string S.
// Example
// Sample Input 1
// ADDAAADDDDD
// Sample Output 1
// Danish
// Sample Input 2
// ADDAAADD
// Sample Output 2
// Draw




let String = "DDDDAAAAAA"

let count_A = 0;
let count_D = 0;

for (let char of String) {
    if (char === "A") {
        count_A++;
    }
    else if (char === "D") {
        count_D++;
    }
}

if (count_A > count_D) {
    console.log("Aditya")
}
else if (count_D > count_A) {
    console.log("Danish");
}
else {
    console.log("Draw")
}




// function Game_Winner(S) {

//     let count_A = 0;
//     let count_D = 0;

//     for (let char of S) {
//         if (char === 'A') {
//             count_A++;
//         } else if (char === 'D') {
//             count_D++;
//         }
//     }


//     if (count_A > count_D) {
//         return "Aditya";
//     } else if (count_D > count_A) {
//         return "Danish";
//     } else {
//         return "Draw";
//     }
// }

// console.log(Game_Winner("DDAAADDDDDDD"));
// console.log(Game_Winner("AAAAADDDDDD"));












