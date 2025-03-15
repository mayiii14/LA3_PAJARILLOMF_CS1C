// Prompt the user to enter their score
let score = prompt("Enter your score:");

// Convert the input score from string to number
score = Number(score);

let grade; // Variable to hold the equivalent grade
let remarks; // Variable to hold final remarks

// Determine the equivalent grade using ternary operators
grade = (score >= 97) ? "1.00\" Excellent" :
        (score >= 94) ? "1.25\" Excellent" :
        (score >= 91) ? "1.50\" Above Average" :
        (score >= 88) ? "1.75\" Above Average" :
        (score >= 85) ? "2.00\" Average" :
        (score >= 82) ? "2.25\" Average" :
        (score >= 79) ? "2.50\" Below Average" :
        (score >= 76) ? "2.75\" Below Average" :
        (score === 75) ? "3.00\" Below Average" :
        (score >= 72) ? "4.00\" Poor" :
        "5.00\" Poor"; // Default case for scores below 72

// Determine final remarks using if/else statements
if (score >= 90) {
    remarks = "HIGH PASS, Candidate for Cum Laude"; // High performance
} else if (score >= 80) {
    remarks = "AVERAGE PASS"; // Average performance
} else if (score >= 75) {
    remarks = "LOW PASS"; // Low performance
} else {
    remarks = "FAILED, Needs Improvement"; // Below passing performance
}

// Output the results to the console
console.log("Result");
console.log(Your equivalent Grade is \"${grade});
console.log(Final Remarks: ${remarks});
