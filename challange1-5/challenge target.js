challenge target

//SOMA DESAFIO 1//

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça

{

K = K + 1;

SOMA = SOMA + K;

}

imprimir(SOMA);


SOMA = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13;
SOMA = 91;



//FIBONACCI DESAFIO 2//

function fibonacci(limite) {
    let a = 0;
    let b = 1;
    let seq = [];
    while (a <= limite) {
      seq.push(a);
      [a, b] = [b, a + b];
    }
    return seq;
  }
  
    let num = parseInt(prompt("Digite um número inteiro:"));
    let seq_fib = fibonacci(num);
  
  
  if (seq_fib.includes(num)) {
    console.log(`O número ${num} pertence à sequência de Fibonacci: ${seq_fib}`);
  } else {
    console.log(`O número ${num} não pertence à sequência de Fibonacci: ${seq_fib}`);
  }


  // LÓGICA DESAFIO 3 //

  a = somar +2, próximo elemento 9;
  b = multiplicar 2, próximo elemento 128;
  c = elevar o índice em 2, próximo elemento 49;
  d = número igual ao quadrado dos números pares logo o próximo elemento é 100;
  e = soma do número atual com o anterior logo o próximo é 13;
  f = todos números começam com a letra D logo o próximo é 200;


  // DISTÂNCIA RIBEIRÃO PRETO <-> FRANCA//

  equação de horario do carro (x1 = v1.t);

  equação de horario do caminhao (x2 = 100km - v2.t);

  calculo tempo de viagem sem obstaculos (tso = 100km/80km = 1,25h);

  calculo tempo com pedagio (v2 = 100km/1,42h = 70,6km/h)

  equação final 
  (t = x1/v1);
  (t = x2-100km/-v2);
  (x1 = x2 => x/v1 = x-100km/-v2);
  (-v2.x=v1.x -v1.100km);
  (x = v1.100km/v1 + v2 = 100km/h.100km
                          110km/h+70,6km/h);
  (x=60.9km ambos possuem a mesma distancia quando se cruzam);

  // INVERTER CARACTERES DE UMA STR DESAFIO 5//

  function inverterString(str) {
    let novaString = '';
    for (let i = str.length - 1; i >= 0; i--) {
      novaString += str[i];
    }
    return novaString;
  }
  
  let minhaString = 'TARGET CHALLENGE';
  let minhaStringInvertida = inverterString(minhaString);
  console.log(minhaStringInvertida);