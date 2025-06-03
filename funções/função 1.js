function calcular(a, b, op) {
  if (op === '+') return a + b;
  if (op === '-') return a - b;
  if (op === '*') return a * b;
  if (op === '/') return a / b;
  return 'Operação inválida';
}

let num1 = prompt("Digite o primeiro número: ");
let num2 = prompt("Digite o segundo número: ");
let operacao = prompt("Digite a operação (+, -, *, /): ");

let resultado = calcular(Number(num1), Number(num2), operacao);
console.log('Resultado:', resultado);
