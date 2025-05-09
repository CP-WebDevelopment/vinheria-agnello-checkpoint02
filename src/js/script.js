var totalCadastros = 0;
var estoqueBaixo = 0;

// VARIÁVEIS INDIVIDUAIS (ATÉ 10 VINHOS)
var nome1, tipo1, safra1, qtd1;
var nome2, tipo2, safra2, qtd2;
var nome3, tipo3, safra3, qtd3;
var nome4, tipo4, safra4, qtd4;
var nome5, tipo5, safra5, qtd5;
var nome6, tipo6, safra6, qtd6;
var nome7, tipo7, safra7, qtd7;
var nome8, tipo8, safra8, qtd8;
var nome9, tipo9, safra9, qtd9;
var nome10, tipo10, safra10, qtd10;

// FUNÇÃO VALIDAR ENTRADA
function validarEntrada(mensagem) {
    var valor = prompt(mensagem);
    while (valor === "") {
        alert("Valor não inserido!");
        valor = prompt(mensagem);
    }
    return valor;
}
