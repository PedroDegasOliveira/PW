function calcularIdade() {
    dataAtual = parseInt(document.getElementById("anoAtual").value);
    dataNasc = parseInt(document.getElementById("ano").value);
    nome = (document.getElementById("nome").value);
    document.getElementById("resultado").innerHTML = nome + " você possui: " + (dataAtual-dataNasc) + " anos de idade";
}