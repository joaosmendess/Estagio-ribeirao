
# Soluções dos Problemas de Lógica e Programação

Este documento oferece uma visão detalhada das soluções para os problemas de lógica e programação propostos, incluindo o raciocínio que levou a cada resposta.




## Problema 1: Cálculo da Soma de Números Até 13

 #### Solução:
 Utilizei um loop while para incrementar uma variável K de 1 até 13, acumulando o valor de K na variável SOMA a cada iteração.

```bash
  let INDICE = 13, SOMA = 0, K = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

console.log(SOMA); // Imprime o valor de SOMA ao final do loop
```
    
## Problema 2: Verificação na Sequência de Fibonacci

#### Solução:
Implementei uma função que percorre a sequência de Fibonacci, comparando cada valor com o número fornecido, até que o valor seja encontrado ou a sequência exceda o número.
```bash
 function isFibonacci(n) {
    let a = 0, b = 1, c;
    if (n === 0) return true;
    while (b < n) {
        c = a + b;
        a = b;
        b = c;
    }
    return b === n;
}

let numero = 34; // Substitua pelo número de interesse
if (isFibonacci(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
```


## Problema 3: Complete o próximo elemento

#### Solução:

a) 9 (série de números ímpares)

b) 128 (cada número é o dobro do anterior)

c) 49 (série de quadrados perfeitos, 
7
2
7 
2
 )

d) 100 (série de quadrados dos números pares, 
1
0
2
10 
2
 )

e) 13 (sequência de Fibonacci)

f) 20 (segue a lógica de dividir o número por 2 até o 16, em diante ele só adiciona 1)


Cada sequência segue uma lógica específica, permitindo prever o próximo elemento com base nos padrões identificados.


## Problema 4: Identificação de Interruptores e Lâmpadas

#### Solução:

Ligo o primeiro interruptor e deixo ligado por alguns minutos.
Desligo o primeiro interruptor, ligo o segundo e vou para a sala das lâmpadas.
A lâmpada que está acesa é controlada pelo segundo interruptor, a lâmpada que está apagada mas quente é controlada pelo primeiro interruptor, e a lâmpada que está apagada e fria é controlada pelo terceiro interruptor.

Esta abordagem permite identificar qual interruptor controla cada lâmpada com eficácia, utilizando a temperatura da lâmpada como uma pista adicional.


## Problema 5: Inverter String

#### Solução:

A função inverter_string recebe uma string como argumento e retorna a string invertida, percorrendo a string original de trás para frente.

```python
  def inverter_string(s):
    string_invertida = ''
    for i in range(len(s)-1, -1, -1):
        string_invertida += s[i]
    return string_invertida

# Substituir pela string que deseja inverter

string_original = "APROVADO"
string_invertida = inverter_string(string_original)
print(f"String original: {string_original}")
print(f"String invertida: {string_invertida}")
```

