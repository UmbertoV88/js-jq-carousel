$(document).ready(function() {
    $(".next").click(function(){
        var imgCorrente = $("img.active");
        var pallinoCorrente = $("i.active");
        var imgSuccessiva = imgCorrente.next("img");
        var pallinoSuccessivo = pallinoCorrente.next("i");
        if (imgSuccessiva.length == 0) {
            imgSuccessiva = $(".prima");
        }
        if (pallinoSuccessivo.length == 0) {
            pallinoSuccessivo = $(".first");
        }
        imgCorrente.removeClass("active");
        pallinoCorrente.removeClass("active");
        imgSuccessiva.addClass("active");
        pallinoSuccessivo.addClass("active");


    })
    $(".preview").click(function(){
        var imgCorrente = $("img.active");
        var pallinoCorrente = $("i.active");
        var imgPrecedente = imgCorrente.prev();
        var pallinoPrecedente = pallinoCorrente.prev("i");
        if (imgPrecedente.length == 0) {
            imgPrecedente = $(".ultima");
        }
        imgCorrente.removeClass("active");
        pallinoCorrente.removeClass("active");
        imgPrecedente.addClass("active");
        pallinoPrecedente.addClass("active");

    })
    $(".circle-container .fa-circle").click(function(){
        var indexPallino = $(this).index();
        console.log(indexPallino);
        var pallinoCorrente = $(".circle-container i.active");
        pallinoCorrente.removeClass("active");
        $(this).addClass("active");

        var fotoCorrente = $("img.active");
        fotoCorrente.removeClass("active");
        var fotoCorrispondente = $(".slider img").eq(indexPallino);
        fotoCorrispondente.addClass("active");
    })
    // tasto Play funzionante
    $(".tasti i.fas").click(function(){
        var play = $(".tasti .fa-play.active");
        var pausa = $(".tasti .fa-pause");
        play.removeClass("active");
        pausa.addClass("active");
    })
    // tasto pausa funzionante

    $(".fa-pause").click(function(){
        var play = $(".tasti .fa-play");
        var pausa = $(".tasti .fa-pause.active");
        pausa.removeClass("active");
        play.addClass("active");
    })
    // aggiungere l'autoplay

    var autoplay = setInterval(function(){
        var imgCorrente = $("img.active");
        var pallinoCorrente = $("i.active");
        var imgSuccessiva = imgCorrente.next();
        var pallinoSuccessivo = pallinoCorrente.next("i");
        if (imgSuccessiva.length == 0) {
            imgSuccessiva = $(".prima");
        }
        if (pallinoSuccessivo.length == 0) {
            pallinoSuccessivo = $(".first");
        }
        imgCorrente.removeClass("active");
        imgSuccessiva.addClass("active");
        pallinoCorrente.removeClass("active");
        pallinoSuccessivo.addClass("active");
        $(".navigation").click(function(){
            clearInterval(autoplay);
        });




    },2000);

    // da impostare l'interruzione dell'autoplay



});
