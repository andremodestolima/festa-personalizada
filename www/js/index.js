function pronto(){
    window.addEventListener('push', ratchetPronto);
    window.PUSH = PUSH;
    var paginaAtual;
    var listaFotos;
    var tamanhoLista = 0;
    var fotos=[];

    jQuery.getJSON("dados.json", function(data){
        listaFotos = "<ul class='table-view'>";
        for(i=0; i<data.listaFotos.length; i++ ) {
            tamanhoLista += 1;
            listaFotos += '<li class="table-view-cell"><a class="navigate-right" id="'+ i +'">' + data.listaFotos[i].listaNome + "</a></li>";
            fotos[i] = '<div class="slider" id="mySlider"><div class="slide-group">';
            fotos[i] += '<div class="slide"><img src="' + data.listaFotos[i].fotos[0] + '" class="foto"><span class="slide-text"><span class="icon icon-left-nav"></span>Slide me</span></div>';
            for (b = 1; b < data.listaFotos[i].fotos.length; b++) {
                fotos[i] += '<div class="slide"><img src="' + data.listaFotos[i].fotos[b] + '" class="foto"></div>'; }
            fotos[i] += '</div></div>';
        }
        listaFotos += "</ul>";
    });

    function ratchetPronto() {
        if (document.location.href.substring(document.location.href.lastIndexOf('/')) == '/listaFotos.html') {
            document.getElementById("conteudo").innerHTML = listaFotos;
            alert(paginaAtual);
            for (i = 0; i < tamanhoLista; i++) {
                alert(i);
                document.getElementById(String(i)).addEventListener("click", function () {
                    paginaAtual = i;
                    alert(paginaAtual);
                    window.PUSH({url: 'fotos.html', transition: 'slide-in'});
                }, false);
            }
        }
        if (document.location.href.substring(document.location.href.lastIndexOf('/')) == '/fotos.html') {
            alert(paginaAtual);
            document.getElementById("conteudo").innerHTML = fotos[0];
            document.getElementById("tituloFotos").innerHTML = "FOTOS";
        }
        if (document.location.href.substring(document.location.href.lastIndexOf('/')) == '/quiz.html') {

        }
        if (document.location.href.substring(document.location.href.lastIndexOf('/')) == '/trofeus.html') {

        }
        if (document.location.href.substring(document.location.href.lastIndexOf('/')) == '/mensagem.html') {

        }
    }
}

document.addEventListener('deviceready', pronto, false);