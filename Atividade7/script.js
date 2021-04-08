function pegaMaior(array) {
    var largest = array[0];

    for (var i = 0; i < array.length; i++) {
        if (largest < array[i] ) {
            largest = array[i];
        }
    }

    return largest;
}

let num1 = parseFloat(window.prompt('Entre com um número: '));
let num2 = parseFloat(window.prompt('Entre com outro número: '));
let num3 = parseFloat(window.prompt('Entre com outro número: '));

window.alert(pegaMaior([num1, num2, num3]));
