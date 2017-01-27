function pronto(){
    window.addEventListener('push', ratchetPronto);
    window.PUSH = PUSH;
    var paginaAtual = "";
    var listaFotos;
    var tamanhoLista = 0;
    var fotos=[];

    jQuery.getJSON("dados.json", function(data){
        listaFotos = "<ul class='table-view'>";
        for(i=0; i<data.listaFotos.length; i++ ) {
            tamanhoLista += 1;
            listaFotos += '<li class="table-view-cell"><a class="navigate-right" id="'+ i +'">' + data.listaFotos[i].listaNome + "</a></li>";
            fotos[i] = '<div class="slider" id="mySlider"><div class="slide-group">';
            fotos[i] += '<div class="slide"><img src="' + data.listaFotos[i].fotos[0] + '"><span class="slide-text"><span class="icon icon-left-nav"></span> Escorregue para a esquerda </span></div>';
            for (b = 1; b < data.listaFotos[i].fotos.length; b++) {
                fotos[i] += '<div class="slide"><img src="' + data.listaFotos[i].fotos[b] + '"></div>'; }
            fotos[i] += '</div></div>';
        }
        listaFotos += "</ul>";
    });

    function atualizarPagina(qual){
        paginaAtual = qual;
        window.PUSH({url: 'fotos.html', transition: 'slide-in'});
    }

    function ratchetPronto() {
        if (document.location.href.substring(document.location.href.lastIndexOf('/')) == '/listaFotos.html') {
            document.getElementById("conteudo").innerHTML = listaFotos;
            for(i=0; i<tamanhoLista.length; i++ ) {
                document.getElementById(String(i)).addEventListener("click", function(){ atualizarPagina(i) }, false); }
            alert(tamanhoLista);
        }
        if (document.location.href.substring(document.location.href.lastIndexOf('/')) == '/fotos.html') {
            alert(paginaAtual);
            document.getElementById("conteudo").innerHTML = fotos[paginaAtual];
            document.getElementById("tituloFotos").innerHTML = "FOTOS";
        }
    }
}

document.addEventListener('deviceready', pronto, false);