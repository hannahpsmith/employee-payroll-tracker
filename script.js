
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// you don't need this outside the scope of the collectEmployees function.
// let employee = {
//   firstName: '', 
//   lastName: '', 
//   salary: ''
// };

// I would just return the employeesArray from the collectEmployees function and pass it to the other functions.
// let employeesArray = [];

function collectEmployees() {
  // booleans should be named as a question, ie 'is', 'has', 'should', etc.
  let isUserAddingMoreEmployees = true;
  let employeesArray = [];
  while (isUserAddingMoreEmployees) {
    // you can define the object keys inline
    let employee = {
      firstName: prompt("Please enter employee's first name"),
      lastName: prompt("Please enter employee's last name"),
      // you can also do `+prompt("Please enter employee's salary")` to convert the string to a number (instead of parseInt);
      salary: parseInt(prompt("Please enter employee's salary")) || 0,
      //                                                         ^ This sets a default in case the expression returns a falsy value
    };
    // employee.firstName = prompt("Please enter employee's first name");
    // employee.lastName = prompt("Please enter employee's last name");
    // employee.salary = parseInt(prompt("Please enter employee's salary"));

    // you don't need this if-check if you set the default value to 0 on line 23
    // if (isNaN (employee.salary)) {
    //  employee.salary = 0;
    // }
    // if (!confirm("Do you want to add another employee?")){
    //     addEmployee = false;
    // };
    employeesArray.push(employee);
    // you can just set the isUserAddingMoreEmployees variable to the boolean returned by the confirm function
    isUserAddingMoreEmployees = confirm("Do you want to add another employee?");
  }
  return employeesArray;
}

function displayAverageSalary(employeesArray) {
  let employeeCount = employeesArray.length;
  let totalSalary = 0;
  for (let i = 0; i < employeeCount; i++) {
    totalSalary += employeesArray[i].salary;
    // the only thing this loop should do is add up the total. I would take all this other logic out.
    // function financial(averageSalary) {
    //     return Number.parseFloat(averageSalary).toFixed(2);
    // }
    // let averageSalary = financial(totalSalary / employeeCount);
  }
  // update $0.00
  let averageSalary = totalSalary / employeeCount;
  let averageSalaryFormattedString = `$${averageSalary.toFixed(2)}`;
  console.log(
    `The average employee salary between our ${employeeCount} employee(s) is ${averageSalaryFormattedString}.`
  );

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
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // this gets a random number between 0 and the length of the array
  let randomNumber = Math.floor(Math.random() * employeesArray.length);
  // then we use that number to access an index of the array
  let randomEmployee = employeesArray[randomNumber];
  // then we can construct a full name from the random employee object
  let randomEmployeeFullName = `${randomEmployee.firstName} ${randomEmployee.lastName}`;
  console.log(
    `Congratulations to ${randomEmployeeFullName}, our random drawing winner!`
  );
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