const students = [
    { name: "Mithun", clearedExam: true },
    { name: "Prabir", clearedExam: false },
    { name: "Alka", clearedExam: true },
    { name: "Shivam", clearedExam: true },
    { name: "Farman", clearedExam: false }
];

function checkResults(username) {
    const student = students.find(student => student.name === username);

    if (student) {
        if (student.clearedExam) {
            return `Congratulations ${username}! You have cleared the exam.`;
        } else {
            return `Sorry ${username}! You have not cleared the exam.`;
        }
    } else {
        return `Invalid User.`;
    }
}


console.log(checkResults("Mithun")); // Output: Congratulations Mithun! You have cleared the exam.
console.log(checkResults("Prabir")); // Output: Sorry Prabir! You have not cleared the exam.
console.log(checkResults("Mithun S")); // Output: Invalid User.
