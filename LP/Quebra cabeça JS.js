CODIGO 1
//CODIGO 1

//Pergunta ao usuário sua idade
let categoria
let idade = Number(prompt("Idade: "))

//COMPARA A IDADE E COLOCA O USUÁRIO EM UMA CATEGORIA
if (idade >= 60) {
	categoria = "Idoso"
} else if (idade >= 18) {
	categoria = "Adulto"
} else if (idade >= 12){
	categoria = "Adolescente"
} else if (idade < 12){
	categoria = "Criança"
}else{
	console.log("Idade errada")
}

//EXIBE A CATEGORIA DO USUÁRIO
console.log(categoria)














//CODIGO 2


//PERGUNTA A IDADE DO USUÁRIO
let idade = Number(prompt("Qual sua idade? "))

//COMPARA E EXIBE SE O USUÁRIO PODE VOTAR
if(idade < 16){
	console.log("Você não vota")
}else if((idade >= 16 && idade < 18) || idade >= 70){
	console.log("Voto facultativo")
}else if(idade >= 18 && idade < 70){
	console.log("Voto obrigatório")
}else{
	console.log("Idade Invalida")
}















//CODIGO 3

//PEDE UM NÚMERO
let numero = Number(prompt("Digite um número: "))

//COMPARA E MOSTRA SE FOR POSITIVO, NEGATIVO OU 0
if(numero > 0){
	console.log("Numero positivo")
}else if(numero < 0){
	console.log("Numero negativo")
}else{
	console.log("Numero 0")
}















//CODIGO 4

//PERGUNTA PARA O USUÁRIO
let escolha = prompt("Você deseja abastecer como seu carro?")

//COMPARA E EXIBE SUA ESCOLHA
if(escolha === "Gasolina" || escolha === "gasolina"){
	console.log("Você escolheu Gasolina")
}else if(escolha === "Diesel" || escolha === "diesel"){
	console.log("Você escolheu Diesel")
}else if(escolha === "Álcool" || escolha === "álcool"){
	console.log("Você escolheu álcool")
}else{
	console.log("Opção invalida")
}














//CODIGO 5

//PERGUNTA A VELOCIDADE
let velocidade = Number(prompt("Qual a velocidade do carro? "))

//COMPARA E MOSTRA A SITUAÇÃO
if(velocidade <= 60){
	console.log("Dentro do limite")
}else if(velocidade <= 75){
	console.log("Atenção")
}else if(velocidade >= 75){
	console.log("Multado")
}else{
	console.log("Velocidade invalida")
}