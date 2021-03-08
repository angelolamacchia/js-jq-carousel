$(document).ready( function() {

    
    for (var i=1; i<=4; i++) {
        if (i==1) {
            $( ".nav" ).append( '<i class="fas fa-circle active circle' + (i) +'"></i>' );
        } else {
            $( ".nav" ).append( '<i class="fas fa-circle circle' + (i) +'"></i>' );
        }   
    }
    

    $(".next i").click( function() {
        nextImg();
    })

    $(".prev i").click( function() {
        prevImg();
    })

    $(".nav i.circle1").click( function() {
        circleImg1();
    })
    $(".nav i.circle2").click( function() {
        circleImg2();
    })
    $(".nav i.circle3").click( function() {
        circleImg3();
    })
    $(".nav i.circle4").click( function() {
        circleImg4();
    })

    

})

//funzione per andare avanti nelle img
function nextImg() {
    var imgActive = $(".images img.active");
    var circleActive = $(".nav i.active");

    imgActive.removeClass("active");
    circleActive.removeClass("active");

    if (imgActive.hasClass("last")) {        
        $(".images img.first").addClass("active");

        $(".nav i.circle1").addClass("active");
    } else {
        imgActive.next("img").addClass("active");

        circleActive.next("i").addClass("active");
    }    
}
//funzione per tornare indietro nelle img
function prevImg() {
    var imgActive = $(".images img.active");
    var circleActive = $(".nav i.active");

    imgActive.removeClass("active");
    circleActive.removeClass("active");

    if (imgActive.hasClass("first")) {
        $(".images img.last").addClass("active");
        $(".nav i.circle4").addClass("active")
    } else {
        imgActive.prev("img").addClass("active");
        circleActive.prev("i").addClass("active");
    }    
}

//funzione per cambiare l'immagine cliccando sui pallini
function circleImg1() {
    $(".images img.active").removeClass("active");
    $(".nav i.active").removeClass("active");

    $("img.first").addClass("active");
    $("i.circle1").addClass("active");
}
function circleImg2() {
    $(".images img.active").removeClass("active");
    $(".nav i.active").removeClass("active");

    $("img.second").addClass("active");
    $("i.circle2").addClass("active");
}
function circleImg3() {
    $(".images img.active").removeClass("active");
    $(".nav i.active").removeClass("active");

    $("img.third").addClass("active");
    $("i.circle3").addClass("active");
}
function circleImg4() {
    $(".images img.active").removeClass("active");
    $(".nav i.active").removeClass("active");

    $("img.last").addClass("active");
    $("i.circle4").addClass("active");
}