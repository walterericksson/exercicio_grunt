// Função para adicionar dois números
function add(a, b) {
    return a + b;
}

// Função para subtrair dois números
function subtract(a, b) {
    return a - b;
}

// Função para multiplicar dois números
function multiply(a, b) {
    return a * b;
}

// Função para dividir dois números
function divide(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero!');
    }
    return a / b;
}

// Teste das funções
console.log('2 + 3 =', add(2, 3));
console.log('5 - 3 =', subtract(5, 3));
console.log('4 * 6 =', multiply(4, 6));
console.log('10 / 2 =', divide(10, 2));