function verificarRespuestas() {
    var total = 10;
    var puntos = 0;
    

    var myForm = document.forms ["test"]
    var respuestas = ["A", "B", "C", "D", "A", "B", "C", "D", "A", "B"];

    for (var i = 1; i < total; i++) {

        if(myForm["P" + i].value === null ||myForm["P" + i].value ==="") {
            alert ("Por favor, responda a la pregunta " + i);
            return false;
        }else{
            if(myForm["P" + i].value === respuestas[i - 1]) {
                puntos++;
            }
        }
    }

    var resultado = document.getElementById("resultado");
    resultado.innerHTML= '<div class="alert alert-primary" role="alert">Puntuación: '+ puntos +' </div>'
    
     return false;
}