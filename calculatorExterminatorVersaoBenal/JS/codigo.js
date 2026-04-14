function somar(){
    num1 = parseFloat(document.getElementById("number1").value);
    num2 = parseFloat(document.getElementById("number2").value);
    document.getElementById("resultado").innerHTML = num1 + num2;
}

function subtrair(){
    num1 = parseFloat(document.getElementById("number1").value);
    num2 = parseFloat(document.getElementById("number2").value);
    document.getElementById("resultado").innerHTML = num1 - num2;
}

function multiplicar(){
    num1 = parseFloat(document.getElementById("number1").value);
    num2 = parseFloat(document.getElementById("number2").value);
    document.getElementById("resultado").innerHTML = num1 * num2;
}

function dividir(){
    num1 = parseFloat(document.getElementById("number1").value);
    num2 = parseFloat(document.getElementById("number2").value);
    document.getElementById("resultado").innerHTML = num1/num2

}
