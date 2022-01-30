exports.convertDist = function() {
    var dist = document.getElementById("dist").value;
    var type = document.getElementById("distConv");
    var result = document.getElementById("result2");
    let convertedDist;

    if (type.value === "k-m") {
        convertedDist = dist * 0.621371;
    } else if (type.value === "m-k") {
        convertedDist = dist / 0.621371;
    }
    result.value = convertedDist;
}