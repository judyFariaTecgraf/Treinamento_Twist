alert("Tabuada")

let num = parseInt(prompt("Digite um número inteiro: "))

let n;
for (n=1; n<=10; n++){
    console.log(`${n} X ${num} = ${n*num}`)
}

let result = "";
for (let n=1; n<=10; n++){
    console.log(`${n} X ${num} = ${n*num}`)
    result += `${n} X ${num} = ${n*num} \n`
}

alert(result)