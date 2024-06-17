function evaluarRPN() {
    const expression = document.getElementById('rpnExpression').value;
    const resultado = evaluarExpresionRPN(expression);
    document.getElementById('resultado').textContent = 'El resultado de la expresión es: ' + resultado;
}

function evaluarExpresionRPN(expresion) {
    const stack = [];
    const tokens = expresion.split(' ');

    tokens.forEach(token => {
        if (!isNaN(token)) {
            stack.push(parseFloat(token));
        } else {
            const b = stack.pop();
            const a = stack.pop();
            let result;

            switch (token) {
                case '+':
                    result = a + b;
                    break;
                case '-':
                    result = a - b;
                    break;
                case '*':
                    result = a * b;
                    break;
                case '/':
                    result = a / b;
                    break;
                case '**':
                    result = Math.pow(a, b);
                    break;
                default:
                    throw new Error('Operador desconocido: ' + token);
            }

            stack.push(result);
        }
    });

    return stack.pop();
}

function convertirAInfijoRPN() {
    const infixExpression = document.getElementById('infixExpression').value;
    const { rpnExpression, steps } = infijoARPN(infixExpression);
    document.getElementById('rpnResultado').textContent = 'La expresión en RPN es: ' + rpnExpression;
    document.getElementById('rpnExpression').value = rpnExpression;
    mostrarPasos(steps);
}

function mostrarPasos(steps) {
    const stepsContainer = document.getElementById('stepsContainer');
    stepsContainer.innerHTML = '<h2>Pasos de conversión:</h2>';
    steps.forEach((step, index) => {
        const stepElement = document.createElement('p');
        stepElement.textContent = `Paso ${index + 1}: ${step}`;
        stepsContainer.appendChild(stepElement);
    });
}

function infijoARPN(expresion) {
    const outputQueue = [];
    const operatorStack = [];
    const steps = [];
    const operators = {
        '+': { precedence: 2, associativity: 'Left' },
        '-': { precedence: 2, associativity: 'Left' },
        '*': { precedence: 3, associativity: 'Left' },
        '/': { precedence: 3, associativity: 'Left' },
        '**': { precedence: 4, associativity: 'Right' }
    };

    const tokens = expresion.match(/\S+/g);

    tokens.forEach(token => {
        if (!isNaN(token)) {
            outputQueue.push(token);
            steps.push(`Número encontrado: ${token}. Cola de salida: ${outputQueue.join(' ')}. Pila de operadores: ${operatorStack.join(' ')}`);
        } else if (token in operators) {
            const o1 = token;
            while (operatorStack.length && operatorStack[operatorStack.length - 1] in operators) {
                const o2 = operatorStack[operatorStack.length - 1];
                if ((operators[o1].associativity === 'Left' && operators[o1].precedence <= operators[o2].precedence) ||
                    (operators[o1].associativity === 'Right' && operators[o1].precedence < operators[o2].precedence)) {
                    outputQueue.push(operatorStack.pop());
                    steps.push(`Operador encontrado: ${o1}. Cola de salida: ${outputQueue.join(' ')}. Pila de operadores: ${operatorStack.join(' ')}`);
                } else {
                    break;
                }
            }
            operatorStack.push(o1);
            steps.push(`Operador encontrado: ${o1}. Cola de salida: ${outputQueue.join(' ')}. Pila de operadores: ${operatorStack.join(' ')}`);
        } else if (token === '(') {
            operatorStack.push(token);
            steps.push(`Paréntesis izquierdo encontrado. Cola de salida: ${outputQueue.join(' ')}. Pila de operadores: ${operatorStack.join(' ')}`);
        } else if (token === ')') {
            while (operatorStack.length && operatorStack[operatorStack.length - 1] !== '(') {
                outputQueue.push(operatorStack.pop());
                steps.push(`Paréntesis derecho encontrado. Cola de salida: ${outputQueue.join(' ')}. Pila de operadores: ${operatorStack.join(' ')}`);
            }
            operatorStack.pop();
            steps.push(`Paréntesis izquierdo eliminado. Cola de salida: ${outputQueue.join(' ')}. Pila de operadores: ${operatorStack.join(' ')}`);
        }
    });

    while (operatorStack.length) {
        outputQueue.push(operatorStack.pop());
        steps.push(`Operador sacado de la pila. Cola de salida: ${outputQueue.join(' ')}. Pila de operadores: ${operatorStack.join(' ')}`);
    }

    return { rpnExpression: outputQueue.join(' '), steps: steps };
}
