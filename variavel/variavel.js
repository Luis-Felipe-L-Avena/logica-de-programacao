CÓDIGOS 

DESAFIO 1

//INICIO
let inicio = "Forneça seus dados"
console.log(inicio)


//DADOS
let nome = prompt("Digite seu nome: ")
let idade = Number(prompt("Digite sua idade: "))
let telefone = Number(prompt("Digite seu telefone: "))
let email = prompt("Digite seu email: ")



//CONFIRMÇÃO
let confirmar = prompt("Os dados estão corretos? (Digite 'sim' ou 'não')")

if (confirmar.toLowerCase() === "sim") {
    console.log("Dados confirmados com sucesso!");
    console.log("Nome: " + nome);
    console.log("Idade: " + idade);
    console.log("Telefone: " + telefone);
    console.log("Email: " + email);
} else if (confirmar.toLowerCase() === "não") {
    console.log("Por favor, corrija seus dados.");
} else {
    console.log("Resposta inválida. Por favor, digite 'sim' ou 'não'.");
}


DESAFIO 2

let data = Number (prompt("Qual ano você nasceu? = "))
let idade = 2025 - data
console.log ("sua idade é " +  idade + "😎")