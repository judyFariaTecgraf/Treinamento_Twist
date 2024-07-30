 /*
 * uma estrutura de dados:
    é um espaço na memória, com tamanho n
    onde n é a quantidade de elementos dentro dela contendo um nome
    cada elemento pode ser acessado por meio de um ou mais índices
    
* Uma estrutura de dados unidimensional:
    é acessada por meio de um único índice
    x[1] -> x: variável / []: indica que é para acessar um índice / 1: posição do elemento dentro da variável x

 * Uma estrutura de dados bidimensional (matriz):
    dois índices -> x[1,2]
    onde, x: variável / 1: linha / 2: coluna
    
 */

let teste=[];

let feira = ["Banana", "Maça", "Pera", "Uva", "Morango"];

console.log(`Um valor: ${feira[3]}`)
console.log(`Toda a lista: ${feira}`)
console.log(`Último elemento: ${feira[feira.length - 1]}`)

console.log(`Tamanho lista teste: ${teste.length}`)

// push() -> insere na última posição
teste.push(0); teste.push("arroz")
console.log(teste)
console.log(`Tamanho lista teste: ${teste.length}`)



/* For */
alert("\n For (padrão) ")
// -> for ( variável ; condição; atualização)
for(let i=0; i<feira.length; i++){
    alert(feira[i])
}



/*For of */
alert("\n For OF ")
// -> for ( variável of lista)
for(let fruta of feira){
    alert(feira[fruta])
}

/*For in */
alert("\n For IN ")
// -> for ( variável in lista)  -> retorna o índice
for(let fruta of feira){
    alert(feira[fruta])
}
