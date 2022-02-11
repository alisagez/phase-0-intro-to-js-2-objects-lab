// Write your solution in this file!

const employee = {
    name: "Awesome Person",
    streetAddress: "Mega Cool Street",
}



function updateEmployeeWithKeyAndValue(employee, hobby, hobbyValue) {
    const newEmployee = { ...employee};
    newEmployee[hobby] = hobbyValue;
    return newEmployee;
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, favoriteColor, favoriteColorValue) {
    employee[favoriteColor] = favoriteColorValue;
    return employee;
}

function deleteFromEmployeeByKey() {
    const newEmployee2 = { ...employee}
    delete newEmployee2.name;
    return newEmployee2;
}

function destructivelyDeleteFromEmployeeByKey() {
    delete employee.name;
    return employee
}