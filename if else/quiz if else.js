let respostaCorreta = 0;
let respostaIncorreta = 0;

let escolha_quiz1 = (&quot;Futebol⚽&quot;);
let escolha_quiz2 = (&quot;Geral��&quot;);
console.log(escolha_quiz1);
console.log(escolha_quiz2);

let escolha1 = prompt(&quot;ESCOLHA O TEMA DO QUIZ��: &quot;);
if (escolha1 === &quot;Futebol&quot; || escolha1 === &quot;futebol&quot;) {
// Perguntas de Futebol
console.log(&quot;1- Quantos jogadores um time de futebol tem em campo durante uma partida
oficial?&quot;);
console.log(&quot;a) 9&quot;);
console.log(&quot;b) 10&quot;);
console.log(&quot;c) 11&quot;);
console.log(&quot;d) 12&quot;);
let resposta1 = prompt(&quot;ESCREVA A RESPOSTA CERTA: &quot;);
if (resposta1 === &quot;C&quot; || resposta1 === &quot;c&quot; || resposta1 === &quot;11&quot;) {
console.log(&quot;RESPOSTA CERTA✅&quot;);
respostaCorreta++;
} else {
console.log(&quot;RESPOSTA ERRADA❌&quot;);
respostaIncorreta++;
}

// Pergunta 2
console.log(&quot;2- Qual país venceu a primeira Copa do Mundo da FIFA em 1930?&quot;);
console.log(&quot;a) Brasil&quot;);
console.log(&quot;b) Argentina&quot;);
console.log(&quot;c) Uruguai&quot;);

console.log(&quot;d) Alemanha&quot;);
let resposta2 = prompt(&quot;ESCREVA A RESPOSTA CERTA: &quot;);
if (resposta2 === &quot;Uruguai&quot; || resposta2 === &quot;uruguai&quot; || resposta2 === &quot;c&quot; || resposta2
=== &quot;C&quot;) {
console.log(&quot;RESPOSTA CERTA✅&quot;);
respostaCorreta++;
} else {
console.log(&quot;RESPOSTA ERRADA❌&quot;);
respostaIncorreta++;
}

// Pergunta 3
console.log(&quot;3- Qual é o nome do prêmio dado ao melhor jogador do mundo pela FIFA?&quot;);
console.log(&quot;a) Bola de Ouro&quot;);
console.log(&quot;b) Chuteira de Ouro&quot;);
console.log(&quot;c) Troféu FIFA Melhor do Mundo&quot;);
console.log(&quot;d) Prêmio Puskás&quot;);
let resposta3 = prompt(&quot;ESCREVA A RESPOSTA CERTA: &quot;);
if (resposta3 === &quot;Bola de Ouro&quot; || resposta3 === &quot;bola de ouro&quot; || resposta3 === &quot;a&quot; ||
resposta3 === &quot;A&quot;) {
console.log(&quot;RESPOSTA CERTA✅&quot;);
respostaCorreta++;
} else {
console.log(&quot;RESPOSTA ERRADA❌&quot;);
respostaIncorreta++;
}

// Pergunta 4
console.log(&quot;4- Qual jogador é conhecido como O Rei do Futebol?&quot;);
console.log(&quot;a) Maradona&quot;);
console.log(&quot;b) Lionel Messi&quot;);

console.log(&quot;c) Pelé&quot;);
console.log(&quot;d) Cristiano Ronaldo&quot;);
let resposta4 = prompt(&quot;ESCREVA A RESPOSTA CERTA: &quot;);
if (resposta4 === &quot;Pelé&quot; || resposta4 === &quot;pele&quot; || resposta4 === &quot;C&quot; || resposta4 === &quot;c&quot;
|| resposta4 === &quot;pelé&quot;) {
console.log(&quot;RESPOSTA CERTA✅&quot;);
respostaCorreta++;
} else {
console.log(&quot;RESPOSTA ERRADA❌&quot;);
respostaIncorreta++;
}

// Pergunta 5
console.log(&quot;5- Qual é a cor do cartão mostrado a um jogador que recebe uma
advertência?&quot;);
console.log(&quot;a) Azul&quot;);
console.log(&quot;b) Verde&quot;);
console.log(&quot;c) Roxo&quot;);
console.log(&quot;d) Amarelo&quot;);
let resposta5 = prompt(&quot;ESCREVA A RESPOSTA CERTA: &quot;);
if (resposta5 === &quot;Amarelo&quot; || resposta5 === &quot;amarelo&quot; || resposta5 === &quot;d&quot; || resposta5
=== &quot;D&quot;) {
console.log(&quot;RESPOSTA CERTA✅&quot;);
respostaCorreta++;
} else {
console.log(&quot;RESPOSTA ERRADA❌&quot;);
respostaIncorreta++;
}

console.log(&quot;��RESULTADO FINAL��&quot;);
console.log(&quot;Respostas certas: &quot; + respostaCorreta);

console.log(&quot;Respostas erradas: &quot; + respostaIncorreta);

} else if (escolha1 === &quot;Geral&quot; || escolha1 === &quot;geral&quot;) {
// Perguntas de Geral
console.log(&quot;1- Qual é o maior planeta do Sistema Solar?&quot;);
console.log(&quot;a) Terra&quot;);
console.log(&quot;b) Marte&quot;);
console.log(&quot;c) Júpiter&quot;);
console.log(&quot;d) Saturno&quot;);

let resposta12 = prompt(&quot;ESCREVA A RESPOSTA CERTA: &quot;);
if (resposta12 === &quot;Júpiter&quot; || resposta12 === &quot;júpiter&quot; || resposta12 === &quot;c&quot; || resposta12
=== &quot;C&quot;) {
console.log(&quot;RESPOSTA CERTA✅&quot;);
respostaCorreta++;
} else {
console.log(&quot;RESPOSTA ERRADA❌&quot;);
respostaIncorreta++;
}

// Pergunta 2
console.log(&quot;2- Quem pintou a Mona Lisa?&quot;);
console.log(&quot;a) Van Gogh&quot;);
console.log(&quot;b) Michelangelo&quot;);
console.log(&quot;c) Da Vinci&quot;);
console.log(&quot;d) Picasso&quot;);

let resposta13 = prompt(&quot;ESCREVA A RESPOSTA CERTA: &quot;);
if (resposta13 === &quot;Da Vinci&quot; || resposta13 === &quot;da vinci&quot; || resposta13 === &quot;c&quot; ||
resposta13 === &quot;C&quot;) {
console.log(&quot;RESPOSTA CERTA✅&quot;);

respostaCorreta++;
} else {
console.log(&quot;RESPOSTA ERRADA❌&quot;);
respostaIncorreta++;
}

// Pergunta 3
console.log(&quot;3- Qual é o símbolo químico do ouro?&quot;);
console.log(&quot;a) Au&quot;);
console.log(&quot;b) Ag&quot;);
console.log(&quot;c) O&quot;);
console.log(&quot;d) Fe&quot;);

let resposta14 = prompt(&quot;ESCREVA A RESPOSTA CERTA: &quot;);
if (resposta14 === &quot;Au&quot; || resposta14 === &quot;au&quot; || resposta14 === &quot;a&quot; || resposta14 === &quot;A&quot;)
{
console.log(&quot;RESPOSTA CERTA✅&quot;);
respostaCorreta++;
} else {
console.log(&quot;RESPOSTA ERRADA❌&quot;);
respostaIncorreta++;
}

// Pergunta 4
console.log(&quot;4- Qual é a capital da França?&quot;);
console.log(&quot;a) Madrid&quot;);
console.log(&quot;b) Paris&quot;);
console.log(&quot;c) Roma&quot;);
console.log(&quot;d) Londres&quot;);

let resposta15 = prompt(&quot;ESCREVA A RESPOSTA CERTA: &quot;);

if (resposta15 === &quot;Paris&quot; || resposta15 === &quot;paris&quot; || resposta15 === &quot;b&quot; || resposta15 ===
&quot;B&quot;) {
console.log(&quot;RESPOSTA CERTA✅&quot;);
respostaCorreta++;
} else {
console.log(&quot;RESPOSTA ERRADA❌&quot;);
respostaIncorreta++;
}

// Pergunta 5
console.log(&quot;5- Quem escreveu &#39;Dom Quixote&#39;?&quot;);
console.log(&quot;a) Shakespeare&quot;);
console.log(&quot;b) Cervantes&quot;);
console.log(&quot;c) Tolstoy&quot;);
console.log(&quot;d) Dickens&quot;);

let resposta16 = prompt(&quot;ESCREVA A RESPOSTA CERTA: &quot;);
if (resposta16 === &quot;Cervantes&quot; || resposta16 === &quot;cervantes&quot; || resposta16 === &quot;b&quot; ||
resposta16 === &quot;B&quot;) {
console.log(&quot;RESPOSTA CERTA✅&quot;);
respostaCorreta++;
} else {
console.log(&quot;RESPOSTA ERRADA❌&quot;);
respostaIncorreta++;
}

console.log(&quot;��RESULTADO FINAL��&quot;);
console.log(&quot;Respostas certas: &quot; + respostaCorreta);
console.log(&quot;Respostas erradas: &quot; + respostaIncorreta);
} else {
console.log(&quot;Opção de tema inválida.&quot;);

}