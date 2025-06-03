// Título inicial
console.log("Aprender os comandos do CMD Linux e Windows\nSelecione o Tutorial que deseja\n")

console.log("1 - LINUX\n2 - WINDOWS")
let resposta = Number(prompt("Digite o número: "))

// LINUX
if (resposta === 1) {
	console.log("Você selecionou LINUX\nEscolha um comando para aprender:")

	console.log("Comandos disponíveis:\npwd\nls\nping\ncd\ncat\ntop\n")
	let comando = prompt("Digite um comando: ")

	switch (comando) {
    	case "pwd":
        	console.log("Exibe o diretório atual")
        	break
    	case "ls":
        	console.log("Lista os arquivos e diretórios no diretório atual")
        	break
    	case "ping":
        	console.log("Verifica a conectividade com um host")
        	break
    	case "cd":
        	console.log("Muda o diretório de trabalho")
        	break
    	case "cat":
        	console.log("Exibe o conteúdo de um arquivo")
        	break
    	case "top":
        	console.log("Exibe os processos em execução")
        	break
    	default:
        	console.log("Comando inválido")
        	break
	}

// WINDOWS
} else if (resposta === 2) {
	console.log("Você selecionou WINDOWS\nEscolha um comando para aprender:")

	console.log("Comandos disponíveis:\ndir\ncls\ncd..\ncd\nmkdir\necho\nstart\nrmdir\nipconfig")
	let comando = prompt("Digite um comando: ")

	switch (comando) {
    	case "dir":
        	console.log("Lista os arquivos e pastas no diretório atual")
        	break
    	case "cls":
        	console.log("Limpa a tela do CMD")
        	break
    	case "cd":
        	console.log("Muda o diretório de trabalho")
        	break
    	case "cd..":
        	console.log("Volta para um diretório anterior")
        	break
    	case "mkdir":
        	console.log("Cria pastas/diretórios")
        	break
    	case "echo":
        	console.log("Exibe uma mensagem no console")
        	break
    	case "start":
        	console.log("Abre programas, arquivos, pastas ou URLs")
        	break
    	case "rmdir":
        	console.log("Remove diretórios vazios")
        	break
    	case "ipconfig":
        	console.log("Exibe as configurações de rede")
        	break
    	default:
        	console.log("Comando inválido")
        	break
	}
} else {
	console.log("Opção inválida")
}

