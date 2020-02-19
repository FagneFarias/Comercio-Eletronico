




function initMap() {

    // vetor com os marcadores, que servem para marcar no mapa lugares especificos. Cada marcador tem uma soh coordenada e pode conter alguns detalhes adicionais, exemplos: icone diferente e um balaozinho com HTMl em seu interior.
    var markers = [
        {
            coords: { lat: -6.8897071, lng: -38.5612185 },
            iconImage: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
            content: "<p>Fake Eletrônicos (IFPB, Cajazeiras)</p>"
        }
    ];

    // servico de criacao de rotas
    var directionsDisplay = new google.maps.DirectionsRenderer();
    var directionsService = new google.maps.DirectionsService();
    
    // calcular e ataluzar
    function calculateRoute() {
    
        var request = {
            origin: { query: document.getElementById( "buscar" ).value },
            destination: markers[0].coords,
            travelMode: "DRIVING"
        };
    
        directionsService.route( request, function( result, status ) {

            if( status == "OK" ){
                directionsDisplay.setDirections( result );
            } else {
                window.alert( "Falha na criação da rota. Erro " + status + "." );
            }
            
            console.log( result, status );
        } )
    }
    
    // configuracoes do mapa "map"
    var options = {
        zoom: 15,
        center: markers[0].coords
    }

    // criacao do mapa "map"
    var map = new google.maps.Map( document.getElementById( "map" ), options );

    directionsDisplay.setMap( map );

    // esperar cliques
    google.maps.event.addListener( map, "click",
        function( event ) {
            addMarker( { coords: event.latLng } );

           
    } )

    // percorrendo o vetor "markers" e adicionando cada marcador ao mapa a medida que forem encontrados.
    for( let i = 0; i < markers.length; i++ ){
        addMarker( markers[i] );
    }

    // funcao que cria um marcador no mapa. ( Com a posicao, um icone e ate um balaozinho com informacoes. )
    function addMarker( props ) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map
            
        })
        if( props.iconImage ){
            // so eh mudado o icone do marcador se o icone for informado na chamada da funcao "addMarker"
            marker.setIcon( props.iconImage );
        }
        if( props.content ){
            // tambem so eh adicionado o balaozinho do marcador se o mesmo for informado na chamada da funcao "addMarker"
            var info = new google.maps.InfoWindow({
                content: props.content
            })     
            marker.addListener( "click", function() {
                info.open( map, marker );
            } )
        }
    }
    
    // digitar enter na caixa de texto de busca
    document.getElementById( "buscar" ).addEventListener('keyup', function(e){
        var key = e.which || e.keyCode;
            if (key == 13) { // codigo da tecla enter
                // define a rota
                calculateRoute();
            }
            
    });

}
/**adiciona script no frete*/
var text =document.getElementById("text");
var result=document.getElementById("result");
    const KEYENTER=13;
    
    text.addEventListener("keypress", function(evento){
        if(evento.keyCode == 13)
            result.style.display = "block";
    })

/*botao btn*/
    var botao = document.getElementById("btn");
    botao.addEventListener('click',function(evento){
        result.style.display = "block";


})
