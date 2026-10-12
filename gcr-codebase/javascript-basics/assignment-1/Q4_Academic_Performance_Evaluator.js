// Assignment 1 - Q4: Academic Performance Evaluator
// Student: Gaurav Sandilya | GLA University
// Replace these five sample marks with the student's marks (0-100).

const marks = [88, 76, 91, 82, 85];
const passingMark = 35;
const maximumMarks = marks.length * 100;

if (marks.some(mark => !Number.isFinite(mark) || mark < 0 || mark > 100)) {
    console.log("Invalid marks. Enter a number from 0 to 100 for every subject.");
} else {
    const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
    const average = totalMarks / marks.length;
    const percentage = (totalMarks / maximumMarks) * 100;
    const hasFailedSubject = marks.some(mark => mark < passingMark);

    let result;
    if (hasFailedSubject) {
        result = "Detained";
    } else if (percentage >= 85) {
        result = "Promoted with Distinction";
    } else if (percentage >= 50) {
        result = "Promoted";
    } else {
        result = "Detained";
    }

    console.log(`Marks: ${marks.join(", ")}`);
    console.log(`Total: ${totalMarks}/${maximumMarks}`);
    console.log(`Average: ${average.toFixed(2)}`);
    console.log(`Overall percentage: ${percentage.toFixed(2)}%`);
    console.log(`Result: ${result}`);
}
