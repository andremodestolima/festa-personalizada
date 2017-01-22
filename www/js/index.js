function pronto(){
    window.addEventListener('push', ratchetPronto);
    window.PUSH = PUSH;
    var paginaAtual = "";
    var dadosJSON;

    jQuery.getJSON("dados.json", function(data){
        dadosJSON = data;
    });

    function ratchetPronto() {
        if (document.location.href.substring(document.location.href.lastIndexOf('/')) == '/index.html') {
        }
    }



}

document.addEventListener('deviceready', pronto, false);
