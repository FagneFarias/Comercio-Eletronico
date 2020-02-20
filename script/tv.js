//IMAGEM 1

function aparecer1() {
    document.getElementById("imagem1").style.display='block';
}
function sumir1(){
    document.getElementById("imagem1").style.display='none';
}

//IMAGEM 2

function aparecer2() {
    document.getElementById("imagem2").style.display='block';
}
function sumir2(){
    document.getElementById("imagem2").style.display='none';
}

//IMAGEM 3

function aparecer3() {
    document.getElementById("imagem3").style.display='block';
}
function sumir3(){
    document.getElementById("imagem3").style.display='none';
}

//IMAGEM 4
function aparecer4() {
    document.getElementById("imagem4").style.display='block';
}
function sumir4(){
    document.getElementById("imagem4").style.display='none';
}

//IMAGEM 5

function aparecer5() {
    document.getElementById("imagem5").style.display='block';
}
function sumir5(){
    document.getElementById("imagem5").style.display='none';
}

//IMAGEM 6

function aparecer6() {
    document.getElementById("imagem6").style.display='block';
}
function sumir6(){
    document.getElementById("imagem6").style.display='none';
}

//IMAGEM 7

function aparecer7() {
    document.getElementById("imagem7").style.display='block';
}
function sumir7(){
    document.getElementById("imagem7").style.display='none';
}
//IMAGEM 8

function aparecer8() {
    document.getElementById("imagem8").style.display='block';
}
function sumir8(){
    document.getElementById("imagem8").style.display='none';
}
//video 1
function autoplay(){
    var vid = document.getElementById("video1");
    vid.autoplay = true;
    vid.load(); 
}

function proximovideo(){
    document.getElementById("lg").src = "videos/";
    document.getElementById("lg.ogg").src = "videos/mi9.ogg";
    document.getElementById("video1").load();

}

function voltavideo(){
    document.getElementById("lg").src = "videos/lg.mp4";
    document.getElementById("lg.ogg").src = "videos/lg.ogg";
    document.getElementById("video1").load();

}

//video 1
function autoplay(){
    var vid = document.getElementById("video1");
    vid.autoplay = true;
    vid.load(); 
}

function proximovideo(){
    document.getElementById("lg").src = "videos/sonya8f.mp4";
    document.getElementById("lg.ogg").src = "videos/sonya8f.ogg";
    document.getElementById("video1").load();

}

function voltavideo(){
    document.getElementById("lg").src = "videos/lg.mp4";
    document.getElementById("lg.ogg").src = "videos/lg.ogg";
    document.getElementById("video1").load();

}

/* GRÁFICO DE LINHAS */

var pizza=document.getElementById("grafPizza");
var grafpizza=pizza.getContext("2d");

var line={//configurar os dados do grafico
    labels:["  LG C9 "," Sony A8F ", " Samsung Q80 "],//pontos do eixo X
    datasets:[{
        label: 'maiores indeces de vendas',
        data:[325,350,610],
        backgroundColor:'rgb(187, 185, 185)',
        borderColor:[
          "rgb(265, 261, 261)",
          'rgb(102, 195, 195)',
          'rgb(74, 73, 83)',]
    }]}
  
  var linha = new Chart(grafpizza, {
    //tipo do grafico
    type:'line',
    data: line,
  });