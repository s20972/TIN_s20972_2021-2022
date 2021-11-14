class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName
    }
    set fullName(fullName) {
        var name = [fullname.split(' ')];
        this.firstName = name[0];
        this.lastName = name[1];
    }
}
class Student extends Person {
    constructor(fname, lname, id, grades) {
        super(fname, lname);
        this.id = id;
        this.grades = grades;
    }
    get avgGrades() {
        return this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
    }

}
var student = new Student('Valeriia', 'Sliusarenko', 's20972', [5, 4, 4, 4.5, 5, 4]);
console.log(student);