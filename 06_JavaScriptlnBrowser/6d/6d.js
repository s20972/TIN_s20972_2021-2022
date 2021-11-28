function addNewPerson() {
    var firstName = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var dob = document.getElementById("dob").value;
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var age = calcAge(dob);
    var table = document.getElementById("table");
    var tdFname = document.createElement("td");
    var tdLname = document.createElement("td");
    var tdAge = document.createElement("td");
    var tdEmail = document.createElement("td");
    var row = document.createElement("tr");
    tdFname.innerHTML = firstName;
    tdLname.innerHTML = lastname;
    tdAge.innerHTML = age;
    tdEmail.innerHTML = email;
    if (firstName === "" || lastname === "" || dob === "" || email === "") {
        alert('please fill the whole form');
    } else {
        row.appendChild(tdFname);
        row.appendChild(tdLname);
        row.appendChild(tdAge);
        row.appendChild(tdEmail);

        table.children[0].appendChild(row);
        form.reset();
    }
}




var calcAge = function(dob) {
    var birthDate = new Date(dob);
    var today = new Date(Date.now());
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}