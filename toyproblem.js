function calculateGrade() {
    // Prompt user and convert input to a number
    const marks = Number(prompt("Enter student marks (0-100):"));
  
    // Validate input
    if (isNaN(marks)) {
      return "Invalid input! Please enter a number.";
    }
    if (marks < 0 || marks > 100) {
      return "Marks must be between 0 and 100!";
    }
  
    // Determine grade
    if (marks > 79) {
      return "A";
    } else if (marks >= 60) {
      return "B";
    } else if (marks >= 50) { // Covers 50-59
      return "C";
    } else if (marks >= 40) { // Covers 40-49
      return "D";
    } else { // Covers 0-39
      return "E";
    }
  }
  
  // Run the function and display result
  console.log(calculateGrade());