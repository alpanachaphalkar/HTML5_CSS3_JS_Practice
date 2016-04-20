function calculateArea(width, height) {
    var area = width * height;
    return area;
}
document.getElementById("Calc").onclick = function () {
    console.log(calculateArea(
        document.getElementById("Width").value, document.getElementById("Height").value
    ));
    alert("Area: " + calculateArea(
        document.getElementById("Width").value, document.getElementById("Height").value
    ));
}