
function escrevaMeuNome(nome) {
    return 'Meu nome é ' + nome;
}

//escrevaMeuNome('Ney');
//escrevaMeuNome('Monteiro');

function verificarIdade(idade) {
    if(idade >= 18) {
        console.log(escrevaMeuNome('Ney') +' é Maior');
    } else {
        console.log('Menor');
    }
}

verificarIdade(18);