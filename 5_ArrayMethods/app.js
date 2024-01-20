const employeesDetails = document.getElementById('employeesDetails');
const btnDisplayEmployees = document.getElementById('btnDisplayEmployees');
const btnCalculateTotalSalaries = document.getElementById('btnCalculateTotalSalaries');
const btnDisplayHREmployees = document.getElementById('btnDisplayHREmployees');
const btnFindEmployeeById = document.getElementById('btnFindEmployeeById');


btnDisplayEmployees.addEventListener('click', displayAllEmployee);
btnCalculateTotalSalaries.addEventListener('click', calculateTotalSalaries);
btnDisplayHREmployees.addEventListener('click', displayHREmployee);


const employees = [
    { id : 1, name: 'John Doe', age: 80, department: 'IT', salary: 5000},
    { id : 2, name: 'John Doe', age: 28, department: 'HR', salary: 45000},
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
    { id: 4, name: 'Ahmed Ali', age: 23, department: 'CS', salary: 120000 },
];


function displayAllEmployee() {
    employeesDetails.innerHTML = ' ';
    employees.map(employee => {
        const p = document.createElement('p');
        const txt = `
        Employee id: ${employee.id}
        Employee name: ${employee.name}
        Employee age: ${employee.age}
        Employee department: ${employee.department}
        Employee salary: ${employee.salary}
        `
        const content = document.createTextNode(txt);
        p.appendChild(content);
        employeesDetails.appendChild(p);
    })
}


function calculateTotalSalaries() {
    
    let sum;
    sum = employees.reduce((acc, cur) => {
        return acc + cur.salary;
    }, 0)

    alert('Total Salaries: ' + sum);
}


function displayHREmployee() {

    employeesDetails.innerHTML = ' ';
    employees.filter(employee => employee.department === 'HR').map(employee => {
        const p = document.createElement('p');
        const txt = `
        Employee id: ${employee.id}
        Employee name: ${employee.name}
        Employee age: ${employee.age}
        Employee department: ${employee.department}
        Employee salary: ${employee.salary}
        `;
        const content = document.createTextNode(txt);
        p.appendChild(content);
        employeesDetails.appendChild(p);
    })
}

function findEmployeeById(employeeID) {
    const foundEmployee = employees.find(employee => employee.id === employeeID);
    employeesDetails.innerHTML = '';
    if (foundEmployee) {
        const p = document.createElement('p');
        const txt =  `
        Employee id: ${foundEmployee.id} 
        Employee name: ${foundEmployee.name}
        Employee age: ${foundEmployee.age}
        Employee department: ${foundEmployee.department}
        Employee salary: ${foundEmployee.salary}
        `;
        const content = document.createTextNode(txt);
        p.appendChild(content);
        employeesDetails.appendChild(p);
    }
    else {
        employeesDetails.textContent = `no Employee has been found with this ID ${employeeID} `
    }
}

btnFindEmployeeById.addEventListener('click', findEmployeeById(4));
