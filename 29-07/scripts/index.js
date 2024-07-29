/* posso criar variáveis globais usando comando
var local/bloco usando o comando let */

let nome = prompt("Digite seu nome: ")
let idade = parseInt(prompt("Digite sua idade: "))

// se a idade for maior que 18 -> Entrada livre //
if (idade > 18){
    alert(`${nome} Entrada liberada!`)

    let comanda = 100
    resp = confirm("Deseja beber uma cerveja?")

    if (resp){
        comanda -= 20
    }

    alert(`Saldo atual: ${comanda}`)

    let saida = confirm("Deseja ir embora?")

    if(saida){
        if(comanda < 0){
            alert(`Sua conta ficou: ${comanda}`)

            let pagmento = parseFloat(prompt("Digite o valor pago: "))

            let result = comanda + pagamento
            
            if (result > 0){
                alert(`Troco: ${result}`)
            }
                else{
                    if(result < 0){
                        alert(`Efetue o pagamento, ${nome}!`)
                    }
                else{
                    alert(`Pagamento OK, ${nome} pode sair!`)
                }
            }
            }
            // comanda >= 0 //
            else{ 
                alert(`${nome} pode sair!`)
            }
        }
    }

else{
    alert("Entrada proibida!");
}
