function validateForm() {
    var age = document.getElementById("age");
    var email = document.getElementById("email");
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var form = document.getElementById("form");
    if (age.value === "" || age.value < 0) {
        age.style.borderColor = "red";
        alert("Age can't be empty or negative");
        return false;
    } else if (!regex.test(email.value) || email.value === "") {
        email.style.borderColor = "red";
        alert("Email is invalid or empty");
        return false;
    } else {
        email.style.borderColor = "green";
        age.style.borderColor = "green";
        return true;
        form.reset();
    }
