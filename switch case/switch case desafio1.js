// Exercício 1: Saudações com base no idioma escolhido
let idioma = prompt("Escolha o idioma (português, inglês, espanhol)")
switch (idioma.toLowerCase()) {
  case 'português':
	console.log("Olá!")
	break
  case 'inglês':
	console.log("Hello!")
	break
  case 'espanhol':
	console.log("¡Hola!")
	break
  default:
	console.log("Idioma não reconhecido")
}

// Exercício 2: Dias da semana com base no número fornecido
let dia = parseInt(prompt("Digite o número do dia da semana (1-7):"))
switch (dia) {
  case 1:
	console.log("Domingo")
	break
  case 2:
	console.log("Segunda-feira")
	break
  case 3:
	console.log("Terça-feira")
	break
  case 4:
	console.log("Quarta-feira")
	break
  case 5:
	console.log("Quinta-feira")
	break
  case 6:
	console.log("Sexta-feira")
	break
  case 7:
	console.log("Sábado")
	break
  default:
	console.log("Número inválido")
}

// Exercício 3: Tipos de transporte com base no número fornecido
let transporte = parseInt(prompt("Escolha o número do transporte (1-Carro, 2-Bicicleta, 3-Ônibus):"))
switch (transporte) {
  case 1:
	console.log("Carro")
	break
  case 2:
	console.log("Bicicleta")
	break
  case 3:
	console.log("Ônibus")
	break
  default:
	console.log("Transporte inválido")
}

// Exercício 4: Classificação de urgência com base no número fornecido
let urgencia = parseInt(prompt("Digite o nível de urgência (1-Baixa, 2-Média, 3-Alta):"))
switch (urgencia) {
  case 1:
	console.log("Urgência Baixa")
	break
  case 2:
	console.log("Urgência Média")
	break
  case 3:
	console.log("Urgência Alta")
	break
  default:
	console.log("Urgência inválida")
}

// Exercício 6: Tipos de veículos com base na categoria
let categoria = prompt("Escolha a categoria do veículo (compacto, SUV, caminhão)")
switch (categoria.toLowerCase()) {
  case 'compacto':
	console.log("Veículo Compacto")
	break
  case 'suv':
	console.log("Veículo SUV")
	break
  case 'caminhão':
	console.log("Caminhão")
	break
  default:
	console.log("Categoria inválida")
}

// Exercício 7: Tarifas de estacionamento com base na duração
let tempo = parseInt(prompt("Quantas horas você ficou estacionado?"))
switch (true) {
  case (tempo <= 1):
	console.log("Tarifa: R$ 5")
	break
  case (tempo <= 3):
	console.log("Tarifa: R$ 10")
	break
  case (tempo <= 6):
	console.log("Tarifa: R$ 15")
	break
  default:
	console.log("Tarifa: R$ 20")
}

// Exercício 8: Níveis de dificuldade em jogos com base no número fornecido
let dificuldade = parseInt(prompt("Escolha o nível de dificuldade (1-Fácil, 2-Médio, 3-Difícil):"))
switch (dificuldade) {
  case 1:
	console.log("Fácil")
	break
  case 2:
	console.log("Médio")
	break
  case 3:
	console.log("Difícil")
	break
  default:
	console.log("Nível inválido")
}

// Exercício 9: Tipos de serviços oferecidos por uma academia
let categoriaAcademia = prompt("Escolha a categoria (yoga, musculação, personal trainer)")
switch (categoriaAcademia.toLowerCase()) {
  case 'yoga':
	console.log("Aula de Yoga")
	break
  case 'musculação':
	console.log("Musculação")
	break
  case 'personal trainer':
	console.log("Personal Trainer")
	break
  default:
	console.log("Categoria inválida")
}

// Exercício 10: Preços de ingressos para um evento
let ingresso = prompt("Escolha o tipo de ingresso (estudante, meia entrada, inteira)")
switch (ingresso.toLowerCase()) {
  case 'estudante':
	console.log("Preço: R$ 20")
	break
  case 'meia entrada':
	console.log("Preço: R$ 30")
	break
  case 'inteira':
	console.log("Preço: R$ 50")
	break
  default:
	console.log("Tipo de ingresso inválido")
}

// Exercício 11: Níveis de dificuldade em exercícios físicos com base na faixa etária
let idade = parseInt(prompt("Digite a sua faixa etária"))
switch (true) {
  case (idade <= 18):
	console.log("Dificuldade: Baixa")
	break
  case (idade <= 35):
	console.log("Dificuldade: Média")
	break
  case (idade <= 60):
	console.log("Dificuldade: Alta")
	break
  default:
	console.log("Dificuldade: Muito Alta")
}

// Exercício 12: Tipos de instrumentos musicais com base no gênero musical
let genero = prompt("Escolha o gênero musical (rock, pop, jazz)")
switch (genero.toLowerCase()) {
  case 'rock':
	console.log("Guitarra")
	break
  case 'pop':
	console.log("Teclado")
	break
  case 'jazz':
	console.log("Saxofone")
	break
  default:
	console.log("Gênero inválido")
}

// Exercício 13: Níveis de habilidade em esportes com base na idade do atleta
let idadeAtleta = parseInt(prompt("Digite a idade do atleta"))
switch (true) {
  case (idadeAtleta <= 18):
	console.log("Habilidade: Iniciante")
	break
  case (idadeAtleta <= 35):
	console.log("Habilidade: Intermediário")
	break
  case (idadeAtleta <= 50):
	console.log("Habilidade: Avançado")
	break
  default:
	console.log("Habilidade: Profissional")
}

// Exercício 14: Níveis de dificuldade em desafios matemáticos com base na categoria
let categoriaMatematica = prompt("Escolha a categoria (básico, intermediário, avançado)")
switch (categoriaMatematica.toLowerCase()) {
  case 'básico':
	console.log("Dificuldade: Fácil")
	break
  case 'intermediário':
	console.log("Dificuldade: Médio")
	break
  case 'avançado':
	console.log("Dificuldade: Difícil")
	break
  default:
	console.log("Categoria inválida")
}
