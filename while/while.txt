// CÓDIGO 1
let nome = ''
while (nome == '') {
  nome = prompt('Digite seu nome de usuário')
}

// CÓDIGO 2
let senha = ''
while (senha == '') {
  senha = prompt('Crie sua senha')
}

// CÓDIGO 3
let confirmar = ''
while (confirmar != senha) {
  confirmar = prompt('Confirme sua senha')
}

// CÓDIGO 4
let usuario = ''
let entradaSenha = ''
while (usuario != 'admin' || entradaSenha != '1234') {
  usuario = prompt('Digite o usuário')
  entradaSenha = prompt('Digite a senha')
}

// CÓDIGO 5
usuario = ''
entradaSenha = ''
while (usuario != 'admin' || entradaSenha != '1234') {
  usuario = prompt('Digite o usuário')
  entradaSenha = prompt('Digite a senha')
}

// CÓDIGO 6
let tentativas = 0
usuario = ''
entradaSenha = ''
while ((usuario != 'admin' || entradaSenha != '1234') && tentativas < 3) {
  usuario = prompt('Digite o usuário')
  entradaSenha = prompt('Digite a senha')
  tentativas = tentativas + 1
}

// CÓDIGO 7
let novoUsuario = prompt('Cadastre um nome de usuário')
let novaSenha = prompt('Cadastre uma senha')
usuario = ''
entradaSenha = ''
while (usuario != novoUsuario || entradaSenha != novaSenha) {
  usuario = prompt('Digite o usuário')
  entradaSenha = prompt('Digite a senha')
}

// CÓDIGO 8
novoUsuario = prompt('Cadastre um nome de usuário')
novaSenha = prompt('Cadastre uma senha')
let resposta = prompt('Esqueceu a senha? (sim/nao)')
if (resposta == 'sim') {
  prompt('Sua senha é ' + novaSenha)
}

// CÓDIGO 9
usuario = prompt('Digite o usuário')
entradaSenha = prompt('Digite a senha')
let comando = ''
while (comando != 'sair') {
  comando = prompt('Digite "sair" para sair')
}
