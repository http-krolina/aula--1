const prompt=require('prompt-sync')();   /// const: constante

let nome = prompt ('Digite seu nome: ');
let idade = parseInt (prompt('Digite sua idade: '));

console.log('Seu nome e :'+nome+' e voce tem '+idade+' anos');

let cidade = prompt('Digite a cidade onde você mora: ');
console.log(`${nome} mora na cidade de ${cidade}`);

// OPERAÇOES MATEMATICAS

let n1 = parseInt (prompt('Digite um número:'));
let n2 = parseInt (prompt('Digite outro número:'));

const soma = n1 + n2;
const sub = n1 - n2;
const mult = n1 * n2;
const div = n1 / n2;

console.log (`Os numeros digitados foram ${n1} e ${n2}`);
console.log(`A soma dos numeros e ${soma}`);
console.log(`A subtracao dos numeros e ${sub}`);
console.log(`A multiplicacao dos numeros e ${mult}`);
console.log (`A divisao dos numeros e ${div}`)

// calcular area do triangulo
let base = parseInt(prompt("digite a base do triangulo "));
let altura = parseInt(prompt("digite a altura do triangulo "));
const area = ((base * altura) / 2).toFixed(2);

console.log(`a base do triangulo é: ${base}`);
console.log(`a altura do triangulo é: ${altura}`);
console.log(`a area do triangulo é: ${area}`);

// calcular a media de 3 notas
let  nota1 = parseInt(prompt("digite a primeira nota: "));
let  nota2 = parseInt(prompt("digite a segunda nota: "));
let  nota3 = parseInt(prompt("digite a terceira nota: "));
const media = ((nota1 + nota2 + nota3) / 3).toFixed(2);
console.log(`A media das notas é: ${media}`);

// Cálculo de produto com desconto

let produto = parseInt(prompt('Digite o valor do produto: '));
const desconto = 2.5 / 100; // Converte 2.5% para decimal
let valorDesconto = produto * desconto;
let valorFinal = produto - valorDesconto;
console.log(`O desconto é de R$ ${valorDesconto.toFixed(2)} e o valor final é de R$ ${valorFinal.toFixed(2)}`);

// Cálculo do imposto de renda para diferentes faixas salariais

// Salário 1 - ISENTO
const salario1 = 1000;
console.log('Você está isento de pagar imposto de renda');

// Salário 2 
const salario2 = 2500;
const impostoRenda2 = 0.075;
const deducao1 = 169.44;
const salarioLiquido2 = salario2 - (salario2 * impostoRenda2) - deducao1;
console.log(`O salário líquido é ${salarioLiquido2.toFixed(2)}`);

// Salário 3 
const salario3 = 3500;
const impostoRenda3 = 0.15;
const deducao2 = 381.44;
const salarioLiquido3 = salario3 - (salario3 * impostoRenda3) - deducao2;
console.log(`O salário líquido é ${salarioLiquido3.toFixed(2)}`);

// Salário 4 
const salario4 = 4000;
const impostoRenda4 = 0.225;
const deducao3 = 662.77;
const salarioLiquido4 = salario4 - (salario4 * impostoRenda4) - deducao3;
console.log(`O salário líquido é ${salarioLiquido4.toFixed(2)}`);

// Conversor de Moedas
let valorReal = parseInt(prompt('Digite o valor em reais: '));
const cotacaoDolar = 5.50;
let valorDolar = valorReal / cotacaoDolar;
console.log(`O valor em dólar é ${valorDolar.toFixed(2)}`);

// Conversor de Dólar
let valorDolar2 = parseInt(prompt('Digite o valor em dólar: '));
const cotacaoReal = 5.50;
let valorReal2 = valorDolar2 * cotacaoReal;
console.log(`O valor em real é R$ ${valorReal2.toFixed(2)}`);

// Conversor de temperatura - Celsius para Fahrenheit
let celsius = parseInt(prompt('Digite a temperatura em Celsius: '));
const fahrenheit = ((celsius * 9) / 5) + 32;
console.log(`A temperatura em Fahrenheit é ${fahrenheit}°F`);

// Cálculo do IMC
const peso = 70;
const altura2 = 1.75;
const imc = (peso / (altura2 * altura2)).toFixed(2);
console.log(`O IMC é ${imc}`);
