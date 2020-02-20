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
