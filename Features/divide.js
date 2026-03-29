
function divide() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    if (b === 0) {
        document.getElementById("result").innerText = "Cannot divide by 0";
    } else {
        document.getElementById("result").innerText = "Result: " + (a / b);
    }
}