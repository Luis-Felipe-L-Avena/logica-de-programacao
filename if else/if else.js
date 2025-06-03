// INICIO
console.log(&quot;REGISTRE-SE no ✅FACILITA✅&quot;);

//CAPTACH
let captch = prompt(&quot;Para veriicar se você não é um robô digite Felicidade: &quot;)
let felicidade = (&quot;Felicidade&quot;)
if (captch === felicidade) {
console.log (&quot;Acesso liberado&quot;)

//REGISTRO
setTimeout(function () {
let usuario = prompt(&quot;Registre seu nome: &quot;);
let senha = prompt(&quot;Registre sua senha: &quot;);
let idade = prompt(&quot;Registre sua idade: &quot;)
if(idade &lt; 18){
console.log(&quot;Você é menor de idade&quot;)

}
else{
console.log(&quot;Você é de maior&quot;)
}

let resposta = prompt(&quot;Os dados estão corretos? (Responda com &#39;Sim&#39; ou
&#39;Não&#39;)&quot;).toLowerCase();

if (resposta === &quot;sim&quot;) {
console.log(&quot;Cadastro confirmado!&quot;);
} else if (resposta === &quot;não&quot; || resposta === &quot;nao&quot;) {
console.log(&quot;Cadastro cancelado. Registre-se novamente.&quot;);
} else {
console.log(&quot;Resposta inválida! Digite apenas &#39;Sim&#39; ou &#39;Não&#39;.&quot;);

}

//LOGIN
console.log(&quot;FAÇA LOGIN no ✅FACILITA✅&quot;)
let usuario_login = prompt(&quot;Digite seu usuario: &quot;)
let senha_login = prompt(&quot;Digite sua senha: &quot;)
if (usuario_login === usuario &amp;&amp; senha_login === senha)
console.log (&quot;LOGIN EFETUADO &quot;)

//MENU
console.log (&quot;��⏫MENU����: &quot;)
let menu1 = (&quot;Temperatura&quot;)
console.log (menu1)
let menu2 = (&quot;Evento&quot;)
console.log (menu2)
let menu3 = (&quot;Horas&quot;)
console.log (menu3)
let menu4 = (&quot;Comparação&quot;)
console.log (menu4)

let menu5 = (&quot;Moedas&quot;)
console.log (menu5)
let menu6 = (&quot;Programador&quot;)
console.log (menu6)
let menu7 = (&quot;Numeros&quot;)
console.log (menu7)
let menu8 = (&quot;Animais&quot;)
console.log (menu8)
let menu9 = (&quot;Boletim&quot;)
console.log(menu9)
let menu10 = (&quot;Intervalo&quot;)
console.log(menu10)
let menu11 = (&quot;Dia&quot;)
console.log(menu11)
let menu12 = (&quot;Habilitação&quot;)
console.log (menu12)
let escolha = prompt(&quot;Escolha uma opção: &quot;)
let temperatura = (&quot;Escreva a temperatura: &quot;)

//TEMPERATURA
if (escolha === &quot;Temperatura&quot; || escolha === &quot;temperatura&quot;){
let temp1 = Number (prompt(&quot;Digite a temperatura: &quot;))

if(temp1 &lt;= 22)
console.log (&quot;Esta frio��&quot;)

if(temp1 &gt; 22)
console.log (&quot;Esta quente��&quot;)
}

//EVENTO
if(escolha === &quot;Evento&quot; || escolha === &quot;evento&quot;){
let evento1 = prompt(&quot;Qual sua idade? &quot;)

if(evento1 &gt;= 16)
console.log (&quot;Acesso liberado✅&quot;)

if(evento1 &lt; 16)
console.log (&quot;Acesso negado idade miníma 16 anos❌&quot;)
}

//HORAS

if(escolha === &quot;Horas&quot; || escolha === &quot;horas&quot;){
let horas1 = Number (prompt(&quot;Digite a hora: &quot;))

if(horas1 &gt;= 6 &amp;&amp; horas1 &lt;= 12 )
console.log (&quot;Bom dia��&quot;)

if (horas1 &gt; 12 &amp;&amp; horas1 &lt; 18){
console.log (&quot;Boa tarde��&quot;)
}

if(horas1 &gt;= 18)
console.log (&quot;Boa noite��&quot;)
}

//COMPARAÇÃO

if(escolha === &quot;Comparação&quot; || escolha === &quot;comparação&quot; || escolha === &quot;comparacao&quot; ||
escolha === &quot;Comparacao&quot;){
let num1 = Number (prompt(&quot;Digite um número: &quot;))
let num2 = Number (prompt(&quot;Digite outro numero: &quot;))
if(num1 === num2)
console.log(&quot;Os dois números são iguais&quot;)
if(num1 &lt; num2)
console.log(&quot;O&quot; + num1 + &quot;é menor que&quot; + num2)
if(num1 &gt; num2)
console.log(&quot;O&quot; + num2 + &quot;è menor que&quot; + num1)
}

//MOEDAS

if(escolha ===&quot;Moedas&quot; || escolha===&quot;moedas&quot;){
let moedas = prompt(&quot;Digite a quantidade de moeda: &quot;)
if(moedas &lt;= 10)
console.log (&quot;Você tem poucas moedas��&quot;)

if(moedas &gt; 10 &amp;&amp; moedas &lt; 20)
console.log (&quot;Você tem uma quantidade média de moedas��&quot;)
if(moedas &gt; 20)
console.log (&quot;Você tem muitas moedas��&quot;)
}

//PROGRAMADOR

if(escolha === &quot;Programador&quot; || escolha === &quot;programador&quot;){
let escolha2 = prompt(&quot;Você estuda programação a anos ou meses? &quot;)
if(escolha2 === &quot;meses&quot; || escolha2 === &quot;Meses&quot; || escolha2 === &quot;Mês&quot; || escolha2 ===
&quot;Mes&quot; || escolha2 === &quot;mês&quot; || escolha2 === &quot;mes&quot;)
console.log (&quot;Você é iniciante&quot;)
if(escolha2 === &quot;Ano&quot; || escolha2 === &quot;ano&quot; || escolha2 === &quot;Anos&quot; || escolha2 === &quot;anos&quot;){
let escolha3 = Number (prompt(&quot;Quantos anos?(EM NÚMEROS):&quot;));
if(escolha3 &lt; 2)
console.log(&quot;Você é iniciante&quot;)
if(escolha3 &gt;= 2)
console.log(&quot;Você é experiente&quot;)
}

}

//NUMEROS

if(escolha === &quot;Numeros&quot; || escolha === &quot;numeros&quot;){
let numeros = Number (prompt(&quot;Digite um numero:&quot;))

if(numeros &lt; 0)
console.log(&quot;Este numero é negativo&quot;)
if(numeros &gt; 0 )
console.log(&quot;Este número é positivo&quot;)
if(numeros === 0)
console.log(&quot;Este numero é o 0&quot;)
}

//ANIMAIS

if(escolha === &quot;Animais&quot; || escolha === &quot;animais&quot;){
let animais = prompt(&quot;Escolha um animal entre Pássaro, Cachorro ou Gato: &quot;);
if(animais === &quot;Pássaro&quot; || animais === &quot;pássaros&quot; || animais === &quot;Passaro&quot; || animais ===
&quot;passaro&quot;)
console.log (&quot;Você escolheu pássaro&quot;)
if(animais === &quot;Cachorro&quot; || animais === &quot;cachorro&quot;)
console.log(&quot;Você escolheu cachorro&quot;)
if(animais === &quot;Gato&quot; || animais === &quot;gato&quot;)
console.log(&quot;Você escolheu o gato&quot;)
else{
console.log(&quot;Animal errado&quot;)
}
}

//BOLETIM

if(escolha === &quot;Boletim&quot; || escolha === &quot;boletim&quot;){
let nota = Number (prompt(&quot;Qual sua nota(em numeros)? &quot;))
if(nota &lt; 7 )
console.log (&quot;Você reprovou&quot;)
if(nota &gt;= 7)
console.log (&quot;Você foi aprovado&quot;)

}

//INTERVALO

if(escolha === &quot;Intervalo&quot; || escolha === &quot;intervalo&quot;){
let intervalo = (&quot;Digite um numero de 10 a 20&quot;)
if(intervalo &gt;= 10 &amp;&amp; intervalo &lt;= 20)
console.log (&quot;Numero dentro do intervalo&quot;)
if(intervalo &lt;= 10 &amp;&amp; intervalo &gt;= 20)
console.log(&quot;Numero fora de intervalo&quot;)
}

//DIA
if(escolha === &quot;dia&quot; || escolha === &quot;Dia&quot;){
let dia1 = prompt(&quot;Escreva um dia: &quot;)

if (dia1 === &quot;Segunda&quot; || dia1 === &quot;Terça&quot; || dia1 === &quot;Quarta&quot; || dia1 === &quot;Quinta&quot; || dia1
=== &quot;Sexta&quot;) {
console.log(&quot;Este é um dia Util!&quot;)
}else if (dia1 === &quot;Domingo&quot; || dia1 === &quot;Sabado&quot;){
console.log(&quot;Fim de semana!&quot;)
}else{

console.log(&quot;Dia invalido!&quot;)
}

}

//HABILITAÇÃO
if(escolha === &quot;Habilitação&quot; || escolha === &quot;habilitação&quot;){
let idade = Number(prompt(&quot;Digite sua idade: &quot;))
if (idade &gt;= 18){
console.log(&quot;você pode dirigir!&quot;)
}else{
console.log(&quot;você não pode dirigir!&quot;)
}

}

}, 2000);

} else {

console.log(&quot;Acesso negado! Tente novamente.&quot;);
}