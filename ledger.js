
class PersonalLedger {
    constructor() {
      this.entries = []; // Array to store ledger entries
    }
  
    // Add an income or expense entry
    addEntry(description, amount, type) {
      if (type !== "income" && type !== "expense") {
        console.error("Invalid type! Use 'income' or 'expense'.");
        return;
      }
  
      const entry = {     
        description,
        amount: parseFloat(amount),
        type,
        date: new Date().toLocaleString(),
      };
      this.entries.push(entry);
      console.log(`${type.charAt(0).toUpperCase() + type.slice(1)} added: ${description} - ₹${amount}`);
    }
  
    // Calculate total income
    getTotalIncome() {
      return this.entries
        .filter((entry) => entry.type === "income")
        .reduce((total, entry) => total + entry.amount, 0);
    }
  
    // Calculate total expenses
    getTotalExpenses() {
      return this.entries
        .filter((entry) => entry.type === "expense")
        .reduce((total, entry) => total + entry.amount, 0);
    }
  
    // Calculate net gain or loss
    getNetBalance() {
      return this.getTotalIncome() - this.getTotalExpenses();
    }
  
    // Display all ledger entries
    displayLedger() {
      console.log("=== Personal Ledger ===");
      this.entries.forEach((entry, index) => {
        console.log(
          `${index + 1}. [${entry.date}] ${entry.description} - ₹${entry.amount} (${entry.type})`
        );
      });
      console.log("========================");
    }
  
    // Display summary
    displaySummary() {
      const totalIncome = this.getTotalIncome();
      const totalExpenses = this.getTotalExpenses();
      const netBalance = this.getNetBalance();
      console.log("=== Ledger Summary ===");
      console.log(`Total Income: ₹${totalIncome}`);
      console.log(`Total Expenses: ₹${totalExpenses}`);
      console.log(`Net Balance: ₹${netBalance}`);
      console.log(netBalance >= 0 ? "You're in profit! 🎉" : "You're in loss. 💸");
      console.log("=======================");
    }
  }
  
  // Example usage
  const myLedger = new PersonalLedger();
  
  // Adding entries
  myLedger.addEntry("Freelance project", 5000, "income");
  myLedger.addEntry("Coffee", 200, "expense");
  myLedger.addEntry("Groceries", 1500, "expense");
  myLedger.addEntry("Sold old phone", 3000, "income");
  
  // Display ledger and summary
  myLedger.displayLedger();
  myLedger.displaySummary();
  

  function renderPieChart() {
    // Sample data for testing (replace with actual ledger data later)
    const totalIncome = 1200;
    const totalExpenses = 800;
  
    // Get canvas context
    const ctx = document.getElementById("incomeExpenseChart").getContext("2d");
  
    // Check if Chart.js is loaded
    if (!Chart) {
      console.error("Chart.js is not loaded!");
      return;
    }
  
    // Create the pie chart
    new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Income", "Expenses"],
        datasets: [
          {
            data: [totalIncome, totalExpenses],
            backgroundColor: ["#00ff00", "#ff0000"], // Green and Red
            hoverBackgroundColor: ["#33ff33", "#ff3333"],
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            position: "top",
            labels: {
              color: "#ffa500", // Orange color for labels
              font: { size: 14 }
            }
          }
        }
      }
    });
  }
  
  // Run the function after DOM content loads
  document.addEventListener("DOMContentLoaded", renderPieChart);

  
