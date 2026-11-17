//Functions re also called methods. Are blocks of code that perform a task. They also have brackets. There are 2 types:

//1. Built-in / Standard Library Functions.

let y = Math.max(56, 89, 43, 98, 39, 97);
console.log(y);

let x = Math.min(67, 98, 56, 45, 23, 1);
console.log(x);

//2. User-defined Functions: Created and defined by the programmer. They are also called custom functions. They can be called multiple times in a program. They can also take parameters and return values.

//A program that displays details of employees.
//Parameters/Variables and Arguments/Values.
function Employee(firstname, age, course) {
    console.log(firstname, age, course);
}

Employee("Carol", 34, "Programming");
Employee("Henry", 43, "Data Science");
