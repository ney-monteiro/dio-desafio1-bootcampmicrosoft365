/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;

*/

// Valor do Preço do Combustível
let precoCombustivel = 5.79;
// Gasto Médio de Combustível por KM
let kmPorLitros = 12;
// Distância percorrida na viagem
let distanciaPercorridaKm = 1580;

// Cálculo da Média - Fórmula
let litrosConsumidos = distanciaPercorridaKm / kmPorLitros;
let valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto.toFixed(2));