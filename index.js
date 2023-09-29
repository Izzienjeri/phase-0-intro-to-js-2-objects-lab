// Write your solution in this file!
const employee = {
    name: 'izzie',
    streetAddress: '4th street',
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObject = { ...employee };
  
    newObject['streetAddress'] = '11 Broadway';
  
   return newObject;
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee['name'] = 'Sam';
    employee['streetAddress'] = '12 Broadway';
    return employee;
  }
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployeeObject = {...employee}
    delete newEmployeeObject['name'];
    return newEmployeeObject;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee['name'];
    return employee;
  }