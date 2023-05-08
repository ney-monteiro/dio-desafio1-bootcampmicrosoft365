/*
1) Faça um algoritmo que dado as 3(três) notas tiradas por um aluno em um semestre da Faculdade, calcule e imprima a
sua média e a sua classificação, conforme tabela abaixo:

Media = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre.
*/

const Nota1 = 7;
const Nota2 = 7;
const Nota3 = 8;
const Media = (Nota1 + Nota2 + Nota3) / 3;

console.log(Media)

if(Media < 5) {
    console.log('Reprovação');
} else if(Media >= 5 && Media <= 7) {
    console.log('Recuperação');
} else {
    console.log('Passou de Semestre');
}