$(document).ready( function() {

    $(".next i").click( function() {
        nextImg();
    })

    $(".prev i").click( function() {
        prevImg();
    })

    $(".nav i.first").click( function() {
        circleImg1();
    })
    $(".nav i.second").click( function() {
        circleImg2();
    })
    $(".nav i.third").click( function() {
        circleImg3();
    })
    $(".nav i.last").click( function() {
        circleImg4();
    })

})

//funzione per andare avanti nelle img
function nextImg() {
    var imgActive = $(".images img.active");
    var circleActive = $(".nav i.active");

    if (imgActive.hasClass("last")) {
        imgActive.removeClass("active");
        $(".images img.first").addClass("active");

        circleActive.removeClass("active");
        $(".nav i.first").addClass("active");
    } else {
        imgActive.removeClass("active");
        imgActive.next("img").addClass("active");

        circleActive.removeClass("active");
        circleActive.next("i").addClass("active");
    }    
}
//funzione per tornare indietro nelle img
function prevImg() {
    var imgActive = $(".images img.active");
    var circleActive = $(".nav i.active");

    if (imgActive.hasClass("first")) {
        imgActive.removeClass("active");
        $(".images img.last").addClass("active");
        
        circleActive.removeClass("active");
        $(".nav i.last").addClass("active")
    } else {
        imgActive.removeClass("active");
        imgActive.prev("img").addClass("active");

        circleActive.removeClass("active");
        circleActive.prev("i").addClass("active");
    }    
}

//funzione per cambiare l'immagine cliccando sui pallini
function circleImg1() {
    $(".images img.active").removeClass("active");
    $(".nav i.active").removeClass("active");

    $("img.first").addClass("active");
    $("i.first").addClass("active");
}
function circleImg2() {
    $(".images img.active").removeClass("active");
    $(".nav i.active").removeClass("active");

    $("img.second").addClass("active");
    $("i.second").addClass("active");
}
function circleImg3() {
    $(".images img.active").removeClass("active");
    $(".nav i.active").removeClass("active");

    $("img.third").addClass("active");
    $("i.third").addClass("active");
}
function circleImg4() {
    $(".images img.active").removeClass("active");
    $(".nav i.active").removeClass("active");

    $("img.last").addClass("active");
    $("i.last").addClass("active");
}