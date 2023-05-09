
/*
2) O IMC - Indice de Massa Corporal é um critério da Organização Mundial da Saúde para dar uma indicação sobre
a condição de peso de uma pessoa adulta;

Fórmula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo:

IMC em adultos:
- Abaixo de 18.5 - Abaixo do Peso;
- Entre 18.5 até 24.9 - Peso Ideal;
- Entre 25 até 29.9 - Levemente Acima do Peso;
- Entre 30 e 34.9 - Obesidade Grau I;
- Entre 35 e 39.9 - Obesidade Grau II (Severa);
- Acima de 40 - Obesidade III (Mórbida)

*/

function calcularImc(peso, altura) {
    return peso / Math.pow(altura,2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do Peso';
    } else if (imc >= 18.5 && imc<= 24.9) {
        return 'Peso Ideal'; 
    } else if(imc >= 25 && imc<= 29.9) {
        return 'Levemente Acima do Peso';
    } else if(imc >= 30 && imc<= 34.9) {
        return 'Obesidade Grau I';
    } else if(imc >= 35 && imc<= 39.9) {
        return 'Obsidade Grau II (Severa)';
    } else {
        return 'Obesidade III (Mórbida)';
    }
}

//Main
(function () {
    const peso = 74;
    const altura = 1.68;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();

