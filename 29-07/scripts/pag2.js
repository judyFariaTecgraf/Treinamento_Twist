let texto = prompt("Digite um texto: ")
alert(typeof texto);

let idade = Number(prompt("Idade: "));

let verificacao = typeof idade
if (verificacao === 'number'){
    idade = parseInt(idade) //converte para inteiro
}
alert(typeof idade);

/*
Operadores Lógicos:
    && -> e 
    || -> ou
    ! -> Negação

*/

// Operador Ternário
let op = confirm("Vc sabe ruby?")
let resp = (op) ? "Contratado" : "Iganorar"

alert(resp)