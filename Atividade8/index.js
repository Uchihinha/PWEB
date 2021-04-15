let aluno1 = {
    ra: 0030481913015,
    nome: 'Gabriel Jorge'
}

console.log('==========ALUNO 1==========')
console.log(aluno1);

let aluno2 = {}

aluno2.ra = 0030481913014;
aluno2.nome = 'João Victor Costa Santos';

console.log('==========ALUNO 2==========')
console.log(aluno2);

function geraAluno(nome, ra) {
    return {
        nome,
        ra
    }
}

let aluno3 = geraAluno('Jhonzin', 0030481913013);

console.log('==========ALUNO 3==========')
console.log(aluno3)
