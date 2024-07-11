function calculateGrade() {
  // Prompt user for input
  let marks = prompt("Enter the student's marks (between 0 and 100):");

  // Convert input to a number
  marks = parseFloat(marks);

  // Validate the input
  if (isNaN(marks) || marks < 0 || marks > 100) {
      alert("Invalid input! Marks must be a number between 0 and 100.");
      return;
  }

  // Determine the grade based on the marks
  let grade;
  if (marks > 79) {
      grade = 'A';
  } else if (marks >= 60) {
      grade = 'B';
  } else if (marks >= 50) {
      grade = 'C';
  } else if (marks >= 40) {
      grade = 'D';
  } else {
      grade = 'E';
  }

  // Output the grade
  alert(`For ${marks} marks, the grade is: ${grade}`);
}
