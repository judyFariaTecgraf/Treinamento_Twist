let num = 11
let dado

do{
    dado = parseInt(prompt("Digite um número: "))
    if(dado != num){
        alert("Você errou! Tente novamente")
    }
    
}while(dado != num)

alert("Acertou!")
