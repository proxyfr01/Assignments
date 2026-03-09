const students = [
  { name: "Aman", marks: 85, subject: "Math" },
  { name: "Riya", marks: 45, subject: "Science" },
  { name: "Karan", marks: 72, subject: "Math" },
  { name: "Sneha", marks: 33, subject: "English" },
  { name: "Rahul", marks: 90, subject: "Science" },
  { name: "Priya", marks: 67, subject: "English" },
  { name: "Arjun", marks: 28, subject: "Math" },
  { name: "Neha", marks: 76, subject: "Science" },
  { name: "Vikram", marks: 54, subject: "English" },
  { name: "Simran", marks: 88, subject: "Math" }
];

const passedStudents = students.filter(student => student.marks >= 60);

const failedStudents = students.filter(student => student.marks < 60);

console.log("Passed:", passedStudents);
console.log("Failed:", failedStudents);

const averageMarks =
  students.reduce((sum, student) => sum + student.marks, 0) / students.length;

console.log("Average Marks:", averageMarks);

const topper = students.reduce((top, student) =>
  student.marks > top.marks ? student : top
);

console.log("Topper:", topper);

const groupedBySubject = students.reduce((group, student) => {
  if (!group[student.subject]) {
    group[student.subject] = [];
  }
  group[student.subject].push(student);
  return group;
}, {});

console.log("Grouped by Subject:", groupedBySubject);