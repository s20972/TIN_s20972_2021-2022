function Student(firstName, lastName, id, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.grades = grades;
}

function printInfo(student) {
    const avg = student.grades.reduce((a, b) => a + b, 0) / student.grades.length;
    return 'First Name: ' + student.firstName + '; Last Name: ' + student.lastName + '; Grade Average: ' + avg;
}
var student = new Student('Valeriia', 'Sliusarenko', 's20972', [5, 4, 4, 4.5, 5, 4]);
console.log(printInfo(student));