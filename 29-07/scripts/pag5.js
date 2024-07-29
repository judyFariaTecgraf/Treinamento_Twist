/* LAÇO DE REPETIÇÃO */

// while -> verifica antes de fazer
// do/while -> faz antes de verificar 

let num = 11;

alert("Acerte o número\n\n" +
    "O número está entre 1 e 15"
)

dado = -1

while (dado != num){
    dado = parseInt(prompt("Digite o número: "))

    if (dado != num){
        alert("Você errou! Tente novamente")
    }
}

alert("Acertou!!!")