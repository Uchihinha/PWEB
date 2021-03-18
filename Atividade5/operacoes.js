const nota1 = parseFloat(prompt('Digite o primeiro número'));
const nota2 = parseFloat(prompt('Digite o segundo número'));

const soma = nota1 + nota2
const subtracao = nota1 - nota2
const produto = nota1 * nota2
const divisao = nota1 / nota2
const resto = nota1 % nota2

alert('A soma é: ' + soma)
alert('A subtração é: ' + subtracao)
alert('A produto é: ' + produto)
alert('A divisão é: ' + divisao)
alert('A resto da divisão é: ' + resto)

const reload = confirm('Tentar novamente?')

reload ?? window.location.reload()