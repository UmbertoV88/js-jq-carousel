$(document).ready(function() {
    $(".next").click(function(){
        var imgCorrente = $("img.active");
        var imgSuccessiva = imgCorrente.next();
        if (imgSuccessiva.length == 0) {
            imgSuccessiva = $(".prima");
        }
        imgCorrente.removeClass("active");
        imgSuccessiva.addClass("active");
    })
    $(".preview").click(function(){
        var imgCorrente = $("img.active");
        var imgPrecedente = imgCorrente.prev();
        if (imgPrecedente.length == 0) {
            imgPrecedente = $(".ultima");
        }
        imgCorrente.removeClass("active");
        imgPrecedente.addClass("active");
    })

});
