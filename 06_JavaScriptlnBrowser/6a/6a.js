function convert() {
    var temp = document.getElementById("temp").value;
    var degree = document.getElementById("degree");



    if (degree.value === "c-f") {
        let convertedTemp = (temp * 9 / 5) + 32;
        document.getElementById("result").value = convertedTemp;
    } else if (degree.value === "f-c") {
        let convertedTemp = (temp - 32) * 5 / 9;
        document.getElementById("result").value = convertedTemp;
    }
}