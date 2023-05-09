/*
3) Elabore uma algoritmo que calcule o que deve ser pago por um produto, consierando o preço normal de etiqueta
e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo
adequado

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preços normal de etiqueta mais juros de 10%;

*/

function aplicarDesconto(valor, desconto) {
    return(valor - (valor * (desconto/100)));
}

function aplicarJuros(valor, juros) {
    return(valor + (valor * (juros/100)));
}

const precoEtiqueta = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log(aplicarDesconto (precoEtiqueta, 10));
    console.log('À vista Débito');
} else if(formaDePagamento === 2) {
    console.log(aplicarDesconto (precoEtiqueta, 15));
    console.log('À vista no Dinheiro ou PIX');
} else if(formaDePagamento === 3) {
    console.log(precoEtiqueta);
    console.log('Parcelado 2x');
} else {
    console.log(aplicarJuros (precoEtiqueta, 10));
    console.log('Parcelado Acima 2x');
}

console.log(200 * 0.1)