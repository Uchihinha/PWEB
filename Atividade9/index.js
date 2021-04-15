// PARTE 1
class Retangulo {
    constructor(altura, base) {
        this.altura = altura;
        this.base = base;
    }

    calculaArea() {
        return this.altura * this.base;
    }
}

let altura = parseFloat(window.prompt('Digite a medida da altura do retângulo: '));
let base = parseFloat(window.prompt('Digite a medida da base do retângulo: '));

let instanciaRetangulo = new Retangulo(altura, base);

window.alert('A área do retângulo é: ' + instanciaRetangulo.calculaArea());


// PARTE 2
function Conta() {
    let correntista;
    let banco;
    let conta;
    let saldo;

    this.getCorrentista = () => {
        return correntista;
    }
    this.setCorrentista = (pCorrentista) => {
        correntista = pCorrentista;
    }

    this.getBanco = () => {
        return banco;
    }
    this.setBanco = (pbanco) => {
        banco = pbanco;
    }

    this.getConta = () => {
        return conta;
    }
    this.setConta = (pconta) => {
        conta = pconta;
    }

    this.getSaldo = () => {
        return saldo;
    }
    this.setSaldo = (psaldo) => {
        saldo = psaldo;
    }
}

function Corrente() {
    let saldoEspecial;

    this.getSaldoEspecial = () => {
        return saldoEspecial;
    }

    this.setSaldoEspecial = (pSaldoEspecial) => {
        saldoEspecial = pSaldoEspecial;
    }
}

function Poupanca() {
    let juros;
    let dataVencimento;

    this.getJuros = () => {
        return juros;
    }
    this.setJuros = (pjuros) => {
        juros = pjuros;
    }

    this.getDataVencimento = () => {
        return dataVencimento.toLocaleDateString('pt-BR');
    }
    this.setDataVencimento = (pdataVencimento) => {
        dataVencimento = pdataVencimento;
    }
}

Corrente.prototype = new Conta();
Poupanca.prototype = new Conta();

let contaCorrente = new Corrente();
contaCorrente.setCorrentista('Correntista 1');
contaCorrente.setBanco('Banco Inter');
contaCorrente.setConta(40028922);
contaCorrente.setSaldo(100);
contaCorrente.setSaldoEspecial(1000);

let contaPoupanca = new Poupanca();
contaPoupanca.setCorrentista('Correntista 2');
contaPoupanca.setBanco('Banco Bradesco');
contaPoupanca.setConta(22982004);
contaPoupanca.setSaldo(200);
contaPoupanca.setJuros(100);
contaPoupanca.setDataVencimento(new Date((new Date()).setFullYear(2021, 10, 10)));

console.log('======CONTA CORRENTE======');
console.log('Correntista', contaCorrente.getCorrentista())
console.log('Banco', contaCorrente.getBanco())
console.log('Conta', contaCorrente.getConta())
console.log('Saldo', contaCorrente.getSaldo())
console.log('Saldo Especial', contaCorrente.getSaldoEspecial())

console.log('======CONTA POUPANÇA======');
console.log('Correntista', contaPoupanca.getCorrentista())
console.log('Banco', contaPoupanca.getBanco())
console.log('Conta', contaPoupanca.getConta())
console.log('Saldo', contaPoupanca.getSaldo())
console.log('Juros', contaPoupanca.getJuros())
console.log('Data de Vencimento', contaPoupanca.getDataVencimento())
