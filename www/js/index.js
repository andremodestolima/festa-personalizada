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
        if (document.location.href.substring(document.location.href.lastIndexOf('/')) == '/index.html') {
        }
        if (document.location.href.substring(document.location.href.lastIndexOf('/')) == '/listaFotos.html') {
            var dados = dadosJSON.listaFotos;
            var listaFotos = "<ul class='table-view'>";
            for(i=0; i<dados.length; i++ ) {
                listaFotos += '<li class="table-view-cell"><a class="navigate-right" onclick="novaPaginaFotos('+ dados[i].listaNome +')">' + dados[i].listaNome + "</a></li>"; }
            listaFotos += "</ul>";
            document.getElementById("conteudo").innerHTML = listaFotos;
        }
        if (document.location.href.substring(document.location.href.lastIndexOf('/')) == '/fotos.html') {
            var dados = dadosJSON.listaFotos;
            var fotos = '<div class="slider" id="mySlider"><div class="slide-group">';





            var fotos += '</div></div>';
            document.getElementById("conteudo").innerHTML = fotos;
        }
    }
}

document.addEventListener('deviceready', pronto, false);