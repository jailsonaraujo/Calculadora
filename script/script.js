var painel;
function insert(num){
    var numero = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML=numero+num;
}

function clean(){
    document.getElementById("resultado").innerHTML="";
}

function back(){
    var resultado = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML=resultado.substring(0, resultado.length -1);
}

function calcular(){
    var resultado = document.getElementById("resultado").innerHTML;

    if(resultado){
        document.getElementById("resultado").innerHTML = eval(resultado);
    }else{
        document.getElementById("resultado").innerHTML = "Informe os Números!"
    }
}
function rel(){
var relogio = new Date();
var horas = relogio.getHours();
var minutos = relogio.getMinutes();
var segundos = relogio.getSeconds();

document.getElementById("horas").innerHTML=horas+": "+minutos+": "+segundos;
}
setInterval(rel, 1000);
