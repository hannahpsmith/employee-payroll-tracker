
const addEmployeesBtn = document.querySelector('#add-employees-btn');

let employeesArray = [];

// Collect employee information
const collectEmployees = function() {
  let addEmployee = true
  while (addEmployee) {
    let employee = {
    firstName: '', 
    lastName: '', 
    salary: ''
    };
    employee.firstName = prompt("Please enter employee's first name");
    employee.lastName = prompt("Please enter employee's last name");
    employee.salary = parseInt(prompt("Please enter employee's salary"));
      if (isNaN (employee.salary)) {
       employee.salary = 0; 
      }
    if (!confirm("Do you want to add another employee?")){
        addEmployee = false;
    };
    employeesArray.push(employee);
  }
    return employeesArray;
}


// Calculate average salary
const displayAverageSalary = function(employeesArray) {
  let employeeCount = employeesArray.length;
  let totalSalary = 0;
  for (let i = 0; i < employeeCount; i++) {
    totalSalary += employeesArray[i].salary;
    }
    let averageSalary = (totalSalary / employeeCount);
    let averageSalaryFormattedString = `$${averageSalary.toFixed(2)}`;
    console.log (`The average employee salary between our ${employeeCount} employee(s) is ${averageSalaryFormattedString}.`);
}


// Select a random employee
const getRandomEmployee = function(employeesArray) {
  let randomNumber = Math.floor(Math.random() * employeesArray.length);
  let randomEmployee = employeesArray[randomNumber];
  let randomEmployeeFullName = `${randomEmployee.firstName} ${randomEmployee.lastName}`;
  console.log(`Congratulations to ${randomEmployeeFullName}, our random drawing winner!`)
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);