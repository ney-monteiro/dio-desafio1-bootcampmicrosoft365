// O sinal de % significa "resto da divisão"

const numero = 0;

// um sinal de igual deve ser usado 3x seguidos.
const numeroDivisivelPor5 = (numero % 5) === 0;

if (numero === 0) {
   console.log('O número é inválido');
} else if (numeroDivisivelPor5) {
   console.log('Sim');
} else {
   console.log('Não');
}