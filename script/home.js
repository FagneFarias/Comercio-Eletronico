var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("Slides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
      
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

/* GRÁFICO COM CHART*/
var linhas=document.getElementById("grafLinhas");
var graflinhas=linhas.getContext("2d");
var pizza=document.getElementById("grafPizza");
var grafpizza=pizza.getContext("2d");

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

/* GRÁFICO DE LINHAS */
var line={//configurar os dados do grafico
  labels:["  LG C9 "," Sony A8F ", " Samsung Q80 "],//pontos do eixo X
  datasets:[{
      label: 'maiores indeces de vendas',
      data:[325,350,610],
      backgroundColor:'rgb(187, 185, 185)',
      borderColor:[
        "rgb(165, 161, 161)",
        'rgb(102, 95, 95)',
        'rgb(54, 53, 53)',]
  }]}

var linha = new Chart(grafpizza, {
  //tipo do grafico
  type:'line',
  data: line,
});
