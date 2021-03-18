const nota1 = parseFloat(prompt('Digite a primeira nota'));
const nota2 = parseFloat(prompt('Digite a segunda nota'));
const nota3 = parseFloat(prompt('Digite a terceira nota'));

const media = parseFloat((nota1+nota2+nota3) / 3).toFixed(2);

alert('A média final é: ' + media)