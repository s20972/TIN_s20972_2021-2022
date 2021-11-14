var studentProto = {
    firstName: '',
    lastName: '',
    id: '',
    courses: ['PRI', 'WF', 'PRO']
}


function createStudent(fname, lname, id) {
    let stud = Object.create(studentProto);
    stud.firstName = fname;
    stud.lastName = lname;
    stud.id = id;
    stud.courses = studentProto.courses;
    return stud;
}
console.log(createStudent('Valeriia', 'Sliusarenko', 's20972'))