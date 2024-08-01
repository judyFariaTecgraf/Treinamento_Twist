
function somar(vlr1, vlr2){
    let v1 = vlr1.value
    let v2 = vlr2.value
    alert(v1 + v2)
}

function subt(){
    let val1 = document.querySelector("#val1").value;
    let val2 = document.querySelector("#val2").value;

    return (val1 - val2)
}

function mult(){
    let val1 = document.querySelector("#val1").value;
    let val2 = document.querySelector("#val2").value;

    return (val1 * val2)
}

function div(){
    let val1 = document.querySelector("#val1").value;
    let val2 = document.querySelector("#val2").value;

    return (val1 / val2)
}

function limpar(){
    let val1 = document.querySelector("#val1").value;
    let val2 = document.querySelector("#val2").value;

    val1 = 0
    val2 = 0
    return (val1, val2)
}

window.addEventListener("load", function(){ 
        let btnSoma = document.querySelector("#soma");
        let btnSubt = document.querySelector("#subt");
        let btnMult = document.querySelector("#mult");
        let btnDiv = document.querySelector("#div");
        
        let limpar = document.querySelector("#limpar");
    
        btnSoma.addEventListener("click", function(){
            let valor1 = document.querySelector("#val1"); // .value = retornar apenas o valor 
            let valor2 = document.querySelector("#val2");

            somar(valor1, valor2);
        });

        btnSubt.addEventListener("click", function(){
            subt();
        });

        btnMult.addEventListener("click", function(){
            mult();
        });

        btnDiv.addEventListener("click", function(){
            div();
        });

        limpar.addEventListener("click", function(){
            limpar();
        });
})


