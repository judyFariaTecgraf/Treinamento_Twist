/* 
    function Nome(){
    }
*/

function Soma(x, y){
    let soma = x + y
    return soma
}

// função sem parâmetro e sem retorno
function CalcQuadrado(){
    let lado = parseFloat(prompt("Lado Quadrado: "))
    alert("\n A Área do quadrado é: " + lado**2)
}

// função com parâmetro e sem retorno
function CalcRetangulo(base, altura){
    alert("\n A área do Retângulo é: " + (base*altura))
}

// função com parâmetro e com retorno
function CalcTriangulo(base, altura){
    let calc = (base*altura)/2
    return calc
}

// função sem parâmetro e com retorno
function CalcTrapezio(){
    let base, Base, altura;
    base = parseFloat(prompt("Digite a base menor: "))
    Base = parseFloat(prompt("Digite a base maior: "))
    altura = parseFloat(prompt("Digite a altura: "))

    let calc = (base + Base)/2 * altura
    return calc
}


