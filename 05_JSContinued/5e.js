class Student {
    constructor(firstName, lastName, id, grades) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.grades = grades;
    }
    get avgGrades() {
        return this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName
    }
    set fullName(fullName) {
        var name = [fullname.split(' ')];
        this.firstName = name[0];
        this.lastName = name[1];
    }
    printInfo(student) {
        return student;
    }
}
var student = new Student('Valeriia', 'Sliusarenko', 's20972', [5, 4, 4, 4.5, 5, 4]);
console.log(student.printInfo(student))