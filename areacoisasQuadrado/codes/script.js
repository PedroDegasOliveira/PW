function calcularQuadrato(){
quadradoTamanho = parseFloat(document.getElementById("quadradoSize").value);
document.getElementById("resultadoQuadrado").innerHTML = "A area do retangulo é: " +  (quadradoTamanho*4);
}

function calcularTriangulo(){
    trianguloBase = parseFloat(document.getElementById("basetri").value);
    trianguloAltura = parseFloat(document.getElementById("alturatri").value);
    document.getElementById("resultadoTriangulo").innerHTML = "A area do triangulo é: " + ((trianguloBase*trianguloAltura)/2);
}

function calcularBola(){
    raioBola = parseFloat(document.getElementById("raio").value);
    document.getElementById("resultadoBola").innerHTML = "A area da circunferencia é: " + (Math.PI*(raioBola*raioBola));
}

function calcularRetangulo(){
    retBase = parseFloat(document.getElementById("alturaR").value);
    retAltura = parseFloat(document.getElementById("baseR").value);
    document.getElementById("resultadoReto").innerHTML = "A area do retangulo é: " + (retBase*retAltura);
}

console.log(Math.PI);