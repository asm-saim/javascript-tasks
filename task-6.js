/** Problem 06 :  (Current Salary )  */
var experience = 3;
var startingSalary = 15000;
//write your code here
const increment=0.05;
let salary = startingSalary;

for(let i=1; i<=experience; i++)
{
    salary=salary+salary*increment;
}

console.log(salary.toFixed(2));