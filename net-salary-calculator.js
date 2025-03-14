function calculateNetSalary(monthlyPay) {
    const fringeBt = 0.05; // set a base rate for fringe benefits to 5% of monthlyPay
    const shif = 0.0275; // 2.75% of monthlyPay
    const nssf = 0.06; // 6% of monthlyPay
    const housingL = 0.015; // 1.5% of monthlyPay
  
    // Calculate paye
    let paye;
    if (monthlyPay <= 24000) {
      paye = 0.1 * monthlyPay;
    } else if (monthlyPay <= 32333) {
      paye = 0.25 * monthlyPay;
    } else if (monthlyPay <= 500000) {
      paye = 0.3 * monthlyPay;
    } else if (monthlyPay <= 800000) {
      paye = 0.325 * monthlyPay;
    } else {
      paye = 0.35 * monthlyPay;
    }
  
  
    const benefits = paye + fringeBt + shif + nssf + housingL;
  
    const netSalary = monthlyPay -benefits;
  
    console.log(`Net Salary: ${netSalary.toFixed(2)}`);
    return netSalary.toFixed(2);
  }
  
  
  calculateNetSalary(23000);
  calculateNetSalary(25000);
  calculateNetSalary(350000);
  calculateNetSalary(900000); 
  