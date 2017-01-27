function pronto(){
    window.addEventListener('push', ratchetPronto);
    window.PUSH = PUSH;
    var paginaAtual = "";
    var dadosJSON;

    jQuery.getJSON("dados.json", function(data){
        dadosJSON = data;
    });

    function novaPaginaFotos(qual){
        paginaAtual = qual;
        window.PUSH({url: 'fotos.html', transition: 'slide-in'});
    }

    function ratchetPronto() {
        if (document.location.href.substring(document.location.href.lastIndexOf('/')) == '/listaFotos.html') {
            var dados = dadosJSON.listaFotos;
            var listaFotos = "<ul class='table-view'>";
            for(i=0; i<dados.length; i++ ) {
                listaFotos += '<li class="table-view-cell"><a class="navigate-right" id="'+ i +'">' + dados[i].listaNome + "</a></li>";
            }
            listaFotos += "</ul>";
            document.getElementById("conteudo").innerHTML = listaFotos;
            for(i=0; i<dados.length; i++ ) {
                document.getElementById(String(i)).addEventListener("click", function(){novaPaginaFotos(i)}, false);
            }
        }
        if (document.location.href.substring(document.location.href.lastIndexOf('/')) == '/fotos.html') {
            var dados = dadosJSON.listaFotos[paginaAtual];
            var fotos = '<div class="slider" id="mySlider"><div class="slide-group">';
            fotos += '<div class="slide"><img src="' + dados.fotos[0] + '"><span class="slide-text"><span class="icon icon-left-nav"></span> Escorregue para a esquerda </span></div>';
            for(i=1; i<dados.fotos.length; i++ ) {
                fotos += '<div class="slide"><img src="' + dados.fotos[i] + '"></div>'; }
            fotos += '</div></div>';
            document.getElementById("conteudo").innerHTML = fotos;
            document.getElementById("tituloFotos").innerHTML = dados.listaNome;
        }
    }
}

document.addEventListener('deviceready', pronto, false);