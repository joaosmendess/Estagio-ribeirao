function isFibonacci(n) {
  let a = 0,
    b = 1,
    c;
  if (n === 0) {
    return true;
  }
  while (b < n) {
    c = a + b;
    a = b;
    b = c;
  }
  return b === n;
}

// Substitua pelo número que deseja verificar
let numero = 36;
if (isFibonacci(numero)) {
  console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
// Para rodar insira no terminal "node questao_2.js"
