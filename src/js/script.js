var totalCadastros = 0;
var estoqueBaixo = 0;
var continuar = true; 
var menorSafra = Infinity; 
var vinhoMaisAntigo = "";
var anoAtual = 2025; 

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

// FUNÇÃO VERIFICAR ESTOQUE
function verificarEstoque(quantidade) {
    return quantidade < 5;
}

// FUNÇÃO CLASSIFICAR SAFRA
function classificarSafra(safra) {
    var idade = anoAtual - safra;
    if (idade <= 5) return "Jovem";
    if (idade <= 15) return "Amadurecido";
    return "Antigo";
}

// FUNÇÃO MOSTRAR DADOS
function mostrarDados(nome, tipo, safra, qtd, classificacao) {
    var mensagem = "📦 Vinho cadastrado:\n";
    mensagem += "Nome: " + nome + "\n";
    mensagem += "Tipo: " + tipo + "\n";
    mensagem += "Safra: " + safra + "\n";
    mensagem += "Quantidade: " + qtd + "\n";
    mensagem += "Classificação: " + classificacao + "\n";
    if (verificarEstoque(qtd)) {
        mensagem += "⚠️ Estoque Baixo!\n";
    }
    alert(mensagem);
    console.log(mensagem);
}

// LOOP DE CADASTRO
while (continuar && totalCadastros < 10) {
    totalCadastros++;

    var nome = validarEntrada("Digite o nome do vinho:");
    var tipo = validarEntrada("Digite o tipo do vinho (Tinto, Branco ou Rosê):");
    var safra = parseInt(validarEntrada("Digite a safra do vinho:"));
    var qtd = parseInt(validarEntrada("Digite a quantidade do vinho:"));

    var classificacao = classificarSafra(safra);
    if (verificarEstoque(qtd)) {
        estoqueBaixo++;
    }

    mostrarDados(nome, tipo, safra, qtd, classificacao);

    // ARMAZENAMENTO EM VARIÁVEIS INDIVIDUAIS
    if (totalCadastros === 1) {
        nome1 = nome; tipo1 = tipo; safra1 = safra; qtd1 = qtd;
    } else if (totalCadastros === 2) {
        nome2 = nome; tipo2 = tipo; safra2 = safra; qtd2 = qtd;
    } else if (totalCadastros === 3) {
        nome3 = nome; tipo3 = tipo; safra3 = safra; qtd3 = qtd;
    } else if (totalCadastros === 4) {
        nome4 = nome; tipo4 = tipo; safra4 = safra; qtd4 = qtd;
    } else if (totalCadastros === 5) {
        nome5 = nome; tipo5 = tipo; safra5 = safra; qtd5 = qtd;
    } else if (totalCadastros === 6) {
        nome6 = nome; tipo6 = tipo; safra6 = safra; qtd6 = qtd;
    } else if (totalCadastros === 7) {
        nome7 = nome; tipo7 = tipo; safra7 = safra; qtd7 = qtd;
    } else if (totalCadastros === 8) {
        nome8 = nome; tipo8 = tipo; safra8 = safra; qtd8 = qtd;
    } else if (totalCadastros === 9) {
        nome9 = nome; tipo9 = tipo; safra9 = safra; qtd9 = qtd;
    } else if (totalCadastros === 10) {
        nome10 = nome; tipo10 = tipo; safra10 = safra; qtd10 = qtd;
    }

    // VERIFICAR SAFRA MAIS ANTIGA
    if (safra < menorSafra) {
        menorSafra = safra;
        vinhoMaisAntigo = nome;
    }

    // CONTINUAR?
    if (totalCadastros < 10) {
        var resposta = prompt("Deseja cadastrar outro vinho? (s/n)");
        if (resposta !== "s" && resposta !== "S") {
            continuar = false;
            alert("✅ Cadastro finalizado. Confira os dados no console.");
        }
    } else {
        alert("Limite de 10 cadastros atingido.");
        alert("✅ Cadastro finalizado. Confira os dados no console.");
    }
}

// EXIBIR RESUMO FINAL
var resumo = "Resumo final dos vinhos:\n";

resumo += "Total cadastrados: " + totalCadastros + "\n";
resumo += "Com estoque baixo: " + estoqueBaixo + "\n";
resumo += "Mais antigo: " + vinhoMaisAntigo + " (" + menorSafra + ")\n";

console.log(resumo);
