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
    document.getElementById("s10").src = "videos/mi9";
    document.getElementById("s10.ogg").src = "videos/mi9.ogg";
    document.getElementById("video1").load();

}

function voltavideo(){
    document.getElementById("s10").src = "videos/s10";
    document.getElementById("s10.ogg").src = "videos/s10.ogg";
    document.getElementById("video1").load();

}
/* Grafico */
var linhas=document.getElementById("grafLinhas");
var graflinhas=linhas.getContext("2d");

/* GRÁFICO DE PIZZA */
var pie={//configurar os dados do grafico
  labels:[" Samsung Galaxy Note 10 Plus ","Xiaomi Mi 9", " Motorola One Zoom"],//pontos do eixo X
  datasets:[{
      label: 'maiores indeces de vendas',
      data:[30,20,50],
      backgroundColor:[
                'rgb(187, 185, 185)',
                'rgb(102, 95, 95)',
                'rgb(54, 53, 53)'
      ],
      borderColor:"black",
  }]}

  var pizza = new Chart(graflinhas, {
    //tipo do grafico
    type:'pie',
    data: pie,
  });