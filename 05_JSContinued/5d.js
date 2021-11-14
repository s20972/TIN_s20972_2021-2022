function Student(firstName, lastName, id, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.grades = grades;
    Object.defineProperty(this, 'avgGrades', {
        get() {
            return this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
        }
    });
    Object.defineProperty(this, 'fullName', {
        get() {
            return this.firstName + ' ' + this.lastName;
        },
        set(fullname) {
            var name = [fullname.split(' ')];
            this.firstName = name[0];
            this.lastName = name[1];
        }
    });
}

function printInfo(student) {
    return student;
}
var student = new Student('Valeriia', 'Sliusarenko', 's20972', [5, 4, 4, 4.5, 5, 4]);
console.log(printInfo(student));
console.log('Grades Average = ' + student.avgGrades);
student.fullname = 'Barbara Palvin';
console.log(printInfo(student));