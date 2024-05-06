
const addEmployeesBtn = document.querySelector('#add-employees-btn');

let employee = {
  firstName: '', 
  lastName: '', 
  salary: ''
};

let employeesArray = [];

const collectEmployees = function() {
  let addEmployee = true
  while (addEmployee) {
    employee = {
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

const displayAverageSalary = function(employeesArray) {
  let employeeCount = employeesArray.length;
  let totalSalary = 0;

  for (let i = 0; i < employeeCount; i++) {
    totalSalary += employeesArray[i].salary;
    let averageSalary = totalSalary / employeeCount;

  };
  let averageSalary = totalSalary / employeeCount;
  console.log (`The average employee salary between our ${employeeCount} employee(s) is  ${averageSalary}.`);



  //   console.log ('The average employee salary between our' employeesArray.length 'employees is' (avg));
  // }

//   for (let salary* salary.length)
//     avg = (salary * salary.length);
// console.log("The average employee salary between our" employee.length "employees is" avg);
  //calculate average salary
  // for loop to create sum, sum of average salaries divide by array.length


  // TODO: Calculate and display the average salary
  //pet example
  //let totalSalary = 0
  //index [ 0   ,  1 ,   2 ] 
  //[Sarah, Joe, {Carli}]
  //how to access all employees salary? 
  // for loop (14-Iteration)
  //employee[i].salary
  //take ind. salary and add it to the total
  //totalSalary and divide by total number of array items
  //console log

  // i need to take the number of employees, total the salaries, divid by the total number of employees

}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee - look up math function to randomize a number, numbers not names --check methods
  // create variable, make it equal to math.random times by array.length -- plug into console log as string using template literal format ${ }
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