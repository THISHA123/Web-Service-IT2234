//DEFINE 10 STUDENT JSON
//Store it in an array
//find the female students
//find the students who are following IT courses
//find the max ad average GPA among the students

console.log("---- Defined 10 students ----")
let students = [
    {reno: '2021/ict/113', name: 'James', age: 21, gender: 'Male', course: 'IT', gpa: 3.5},
    {reno: '2021/ict/114', name: 'Sarah', age: 22, gender: 'Female', course: 'IT', gpa: 3.8},
    {reno: '2021/ict/115', name: 'Liam', age: 21, gender: 'Male', course: 'CS', gpa: 3.2},
    {reno: '2021/ict/116', name: 'Emily', age: 22, gender: 'Female', course: 'IT', gpa: 3.9},
    {reno: '2021/ict/117', name: 'Noah', age: 23, gender: 'Male', course: 'Business', gpa: 3.1},
    {reno: '2021/ict/118', name: 'Sophia', age: 22, gender: 'Female', course: 'IT', gpa: 3.6},
    {reno: '2021/ict/119', name: 'Oliver', age: 20, gender: 'Male', course: 'CS', gpa: 3.7},
    {reno: '2021/ict/120', name: 'Ava', age: 21, gender: 'Female', course: 'IT', gpa: 4.0},
    {reno: '2021/ict/121', name: 'Ethan', age: 23, gender: 'Male', course: 'Business', gpa: 3.0},
    {reno: '2021/ict/122', name: 'Mia', age: 20, gender: 'Female', course: 'IT', gpa: 3.5}
];

console.log(students)

console.log("-- Find female students --")
let femaleStudents = students.filter(student => student.gender === "Female");
console.log("Female Students:", femaleStudents);

console.log("-- Find students in IT courses --")
let itStudents = students.filter(student => student.course === "IT");
console.log("IT Students:", itStudents);

console.log("-- Find max and average GPA --")
let maxGPA = Math.max(...students.map(student => student.gpa));
let avgGPA = students.reduce((sum, student) => sum + student.gpa, 0) / students.length;

console.log("Max GPA:", maxGPA);
console.log("Average GPA:", avgGPA);
