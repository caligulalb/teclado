const teclas = document.querySelectorAll(".oitava > div")
const botoes = document.querySelectorAll(".botoes > div")

const acordes = [ 
    document.querySelectorAll("#c, #e, #g"), 
    document.querySelectorAll("#d, #f, #a"), 
    document.querySelectorAll("#e, #g, #b")
]

botoes.forEach(function(botao){
    botao.onmousedown = function() {
        botao.classList.add("selecionada")
    }
    botao.onmouseup = function() {
        botao.classList.remove("selecionada")
    }
})





//function down(chord) {
//    chord.classList.remove("selecionada")
//}
//function up(chord) {
//    chord.classList.add("selecionada")
//}


//botoes.forEach(function(botao) {
//    botao.onmousedown = function() {
//        botao.classList.add("selecionada")
//    }
//
//    botao.onmouseup = function() {
//        console.log("onmouseup")
//    }
//})

//function funcoes(acordes) {
//    chord(acordes)
//    remover(acordes)
//}
//
//function remover(acordes) {
//    acordes.classList.remove("selecionada")
//    console.log("desmarcar")
//}
//function chord(acordes) {
//    acordes.classList.add("selecionada")
//    console.log("marcar")
//}

//function chord(acordes) {
//    for (let index = 0; index < acordes.length; index++) {
//        acordes[index].classList.add("selecionada")
//    }
//}
//function remover(acordes) {
//    for (let index = 0; index < acordes.length; index++) {
//        acordes[index].classList.remove("selecionada")   
//    }
//} document.querySelectorAll("#c, #e, #g")


//const acorde = document.querySelector("#chord")
//
//const acordes = [ 
//    document.querySelectorAll("#c, #e, #g"), 
//    document.querySelectorAll("#d, #f, #a"), 
//    document.querySelectorAll("#e, #g, #b")
//]
//
//
//function chord(acordes) {
//    
//    for (let index = 0; index < acordes.length; index++) {
//        acordes[index].classList.add("selecionada")
//        
//    }
//}

