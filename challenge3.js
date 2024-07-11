function calculateNetSalary() {
  // Prompt user for input
  let basicSalary = prompt("Enter the basic salary:");
  let benefits = prompt("Enter the benefits:");

  // Convert inputs to numbers
  basicSalary = parseFloat(basicSalary);
  benefits = parseFloat(benefits);

  // Validate inputs
  if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
      console.log("Invalid input! Salary and benefits must be positive numbers.");
      return;
  }

  // Calculate gross salary
  let grossSalary = basicSalary + benefits;

  // Calculate tax (Payee)
  let payee = calculatePayee(grossSalary);

  // Calculate NHIF deductions (assuming a simplified rate)
  let nhifDeductions = calculateNHIF(basicSalary);

  // Calculate NSSF deductions (assuming a simplified rate)
  let nssfDeductions = calculateNSSF(basicSalary);

  // Calculate net salary
  let netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

  // Display results
  console.log(`Gross Salary: ${grossSalary}`);
  console.log(`Tax (Payee): ${payee}`);
  console.log(`NHIF Deductions: ${nhifDeductions}`);
  console.log(`NSSF Deductions: ${nssfDeductions}`);
  console.log(`Net Salary: ${netSalary}`);
}

// Function to calculate Payee (Tax)
function calculatePayee(grossSalary) {
  let tax = 0;
  if (grossSalary <= 24000) {
      tax = 0.1 * grossSalary;
  } else if (grossSalary <= 32333) {
      tax = 2400 + 0.25 * (grossSalary - 24000);
  } else if (grossSalary <= 41000) {
      tax = 6000 + 0.3 * (grossSalary - 32333);
  } else if (grossSalary <= 83333) {
      tax = 10500 + 0.3 * (grossSalary - 41000);
  } else {
      tax = 23500 + 0.3 * (grossSalary - 83333);
  }
  return tax;
}

// Function to calculate NHIF deductions (simplified example)
function calculateNHIF(basicSalary) {
  // Assume NHIF deductions are a fixed rate or threshold-based calculation
  return 0.05 * basicSalary;
}

// Function to calculate NSSF deductions (simplified example)
function calculateNSSF(basicSalary) {
  // Assume NSSF deductions are a fixed percentage or threshold-based calculation
  return 0.06 * basicSalary;
}
