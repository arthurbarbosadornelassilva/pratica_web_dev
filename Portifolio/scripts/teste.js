//a constante abaixo se enquadra como um objeto, que utiliza a função 'querySelector' para coletar um valor 
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello World!_"

// testando tipos de variáveis no JS

// Variables are necessary to do anything interesting in programming. If values couldn't change, then you couldn't do anything dynamic
// string
let nomeTeste = 'Arthur'
let sobrenomeTeste = "B. D. Silva"
console.log(nomeTeste, sobrenomeTeste)
// numero
let numeroTeste = 10
let inteiroTeste = -100
let decimalTeste = 5.5
let operacaoTeste = (numeroTeste - decimalTeste)
console.log("Resultados:", numeroTeste, inteiroTeste, decimalTeste, operacaoTeste)
// boolean
let verdadeiroTeste = true
let falsoTeste = false
// array
let listaTeste = ['elemento1','elemento2']
console.log(listaTeste[0])
// objeto
// This can be anything. Everything in JavaScript is an object and can be stored in a variable. Keep this in mind as you learn.
let objetoTeste = {'lista': ['elemento1', 'elemento2', 'elemento3'], 'numero': 10}
console.log(objetoTeste['lista'], objetoTeste['numero'])

// testando operadores no JS

let listaValores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let soma = (listaValores[4] + listaValores[4])
let subtracao = (listaValores[8] - listaValores[7])
let multiplicacao = (listaValores[1] * listaValores[4])
let divisao = [listaValores[7] / listaValores[1]]
// o símbolo '=', assim como no python, java e outras linguagens, tem o valor de 'atribuição de valor' e não igualdade, ou seja, se X vale 10, então o valor atribuido a X = 10 (equivale a 10)
// utilizamos outro símbolo pra indicar igualdade de valores, que retorna se a igualdade é 'true' ou 'false'
let igualdade = (listaValores[0] === 1)
let diferenca = (listaValores[0] !== 3)
console.log(igualdade)

// testando condicionais no JS

let word = "palavra";
if (word === "palavra") {
    alert("Palavra correta")
    // O comando "alert" cria um alerta na tela, como se fosse um tipo de pop-up de erro
} else {
    alert("Palavra Indcorreta")
}

// testando funções no JS

// If you see something which looks like a variable name, but it's followed by parentheses— () —it is likely a function.
let myVariable = document.querySelector("h3");
myVariable.textContent = "Ricardo"
//  Function is a way of packaging functionality that you wish to reuse. It's possible to define a body of code as a function that executes when you call the function name in your code
function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}
// calling the function and printing on the console
console.log(multiply(4, 7));

// testando eventos no JS

//Manipuladores de eventos são estruturas de código que detectam a atividade no navegador e eexecutam o código em resposta
document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });
// Evento de click. Aqui selecionamos o elemento <html>. Em seguida, chamamos sua função addEventListener(), passando o nome do evento para ouvir ('click') e uma função para executar quando o evento acontecer.